"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const DELIVERY_RADIUS_KM = 5;

/*
|--------------------------------------------------------------------------
| Restaurant marker
|--------------------------------------------------------------------------
*/

const restaurantIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #c92a2a;
      border: 4px solid white;
      box-shadow: 0 6px 18px rgba(0,0,0,0.22);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
    ">
      🏪
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -24],
});

/*
|--------------------------------------------------------------------------
| Customer marker
|--------------------------------------------------------------------------
*/

const customerIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #f97316;
      border: 4px solid white;
      box-shadow: 0 6px 18px rgba(0,0,0,0.22);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      cursor: grab;
    ">
      📍
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -24],
});

/*
|--------------------------------------------------------------------------
| Calculate distance between two coordinates
|--------------------------------------------------------------------------
*/

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const earthRadius = 6371;

  const latitudeDifference = ((lat2 - lat1) * Math.PI) / 180;
  const longitudeDifference = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(longitudeDifference / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
};

/*
|--------------------------------------------------------------------------
| Handle map clicks
|--------------------------------------------------------------------------
*/

const MapClickHandler = ({ onLocationSelect }) => {
  useMapEvents({
    click(event) {
      onLocationSelect({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });

  return null;
};

/*
|--------------------------------------------------------------------------
| Move map when selected location changes
|--------------------------------------------------------------------------
*/

const MapController = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (!location) return;

    map.flyTo(
      [location.latitude, location.longitude],
      Math.max(map.getZoom(), 14),
      {
        duration: 1,
      }
    );
  }, [location, map]);

  return null;
};

/*
|--------------------------------------------------------------------------
| Delivery Map
|--------------------------------------------------------------------------
*/

const DeliveryMap = ({
  restaurantLocation,
  selectedLocation,
  onLocationSelect,
}) => {
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  /*
   * Restaurant coordinates
   */
  const restaurantCoordinates = useMemo(
    () => [
      restaurantLocation.latitude,
      restaurantLocation.longitude,
    ],
    [restaurantLocation]
  );

  /*
   * Calculate distance from restaurant
   */
  const distance = useMemo(() => {
    if (!selectedLocation) return null;

    return calculateDistance(
      restaurantLocation.latitude,
      restaurantLocation.longitude,
      selectedLocation.latitude,
      selectedLocation.longitude
    );
  }, [restaurantLocation, selectedLocation]);

  /*
   * Check whether customer is inside
   * the 5 km delivery area
   */
  const isWithinDeliveryArea =
    distance !== null && distance <= DELIVERY_RADIUS_KM;

  /*
   |--------------------------------------------------------------------------
   | Browser current location
   |--------------------------------------------------------------------------
   */

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Location services are not supported by your browser."
      );

      return;
    }

    setLocating(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        onLocationSelect(location);

        setLocating(false);
      },
      () => {
        setLocationError(
          "Unable to access your location. Please allow location access or select your location on the map."
        );

        setLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  /*
   |--------------------------------------------------------------------------
   | Handle dragging the customer marker
   |--------------------------------------------------------------------------
   */

  const handleMarkerDragEnd = (event) => {
    const marker = event.target;

    const position = marker.getLatLng();

    onLocationSelect({
      latitude: position.lat,
      longitude: position.lng,
    });
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_18px_55px_rgba(88,47,27,0.07)]">
      {/* Header */}

      <div className="border-b border-orange-100 bg-gradient-to-r from-[#fffaf5] to-[#fff6ed] px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff0e7] text-xl">
            📍
          </div>

          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a2a]">
              Delivery Location
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight text-[#2b211d] sm:text-2xl">
              Where should we bring it?
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#8c7468]">
              Select your exact delivery location on the map.
            </p>
          </div>
        </div>
      </div>

      {/* Map */}

      <div className="relative p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-orange-100">
          <MapContainer
            center={restaurantCoordinates}
            zoom={14}
            scrollWheelZoom={true}
            className="h-[360px] w-full sm:h-[440px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 5 km delivery circle */}

            <Circle
              center={restaurantCoordinates}
              radius={DELIVERY_RADIUS_KM * 1000}
              pathOptions={{
                color: "#c92a2a",
                fillColor: "#f97316",
                fillOpacity: 0.08,
                weight: 2,
              }}
            />

            {/* Restaurant */}

            <Marker
              position={restaurantCoordinates}
              icon={restaurantIcon}
            >
              <Popup>
                <div className="text-center">
                  <strong>DineFlow Restaurant</strong>
                  <br />
                  <span>Delivery starts here</span>
                </div>
              </Popup>
            </Marker>

            {/* Customer */}

            {selectedLocation && (
              <Marker
                position={[
                  selectedLocation.latitude,
                  selectedLocation.longitude,
                ]}
                icon={customerIcon}
                draggable={true}
                eventHandlers={{
                  dragend: handleMarkerDragEnd,
                }}
              >
                <Popup>
                  <div className="text-center">
                    <strong>Your delivery location</strong>

                    <br />

                    <span>
                      {distance !== null
                        ? `${distance.toFixed(2)} km from DineFlow`
                        : ""}
                    </span>
                  </div>
                </Popup>
              </Marker>
            )}

            {/* Click map to select location */}

            <MapClickHandler
              onLocationSelect={onLocationSelect}
            />

            {/* Follow selected location */}

            <MapController
              location={selectedLocation}
            />
          </MapContainer>

          {/* Current location button */}

          <button
            type="button"
            onClick={handleCurrentLocation}
            disabled={locating}
            className="absolute bottom-4 right-4 z-[1000] flex items-center gap-2 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-xs font-black text-[#3d2d26] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#fffaf5] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-base">
              {locating ? "⏳" : "🎯"}
            </span>

            <span>
              {locating
                ? "Locating..."
                : "Use my location"}
            </span>
          </button>
        </div>

        {/* Instructions */}

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-orange-100 bg-[#fffaf5] p-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
            👆
          </div>

          <div>
            <p className="text-sm font-extrabold text-[#3d2d26]">
              Choose your delivery location
            </p>

            <p className="mt-1 text-xs leading-5 text-[#806b60]">
              Tap anywhere on the map or drag the 📍 marker
              to set your exact delivery location.
            </p>
          </div>
        </div>

        {/* Location error */}

        {locationError && (
          <div className="mt-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold leading-5 text-[#9f2929]">
            {locationError}
          </div>
        )}

        {/* Delivery status */}

        <div className="mt-4">
          {!selectedLocation ? (
            <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50">
                📍
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#3d2d26]">
                  Choose your delivery location
                </p>

                <p className="mt-1 text-xs leading-5 text-[#8c7468]">
                  Your location must be within 5 km of
                  DineFlow.
                </p>
              </div>
            </div>
          ) : isWithinDeliveryArea ? (
            <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg">
                ✓
              </div>

              <div className="min-w-0">
                <p className="text-sm font-black text-green-800">
                  Delivery is available
                </p>

                <p className="mt-1 text-xs font-semibold text-green-700">
                  You are{" "}
                  <span className="font-black">
                    {distance.toFixed(2)} km
                  </span>{" "}
                  from DineFlow.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-lg">
                !
              </div>

              <div className="min-w-0">
                <p className="text-sm font-black text-[#9f2929]">
                  Outside our delivery area
                </p>

                <p className="mt-1 text-xs font-semibold leading-5 text-[#a34e4e]">
                  You are{" "}
                  <span className="font-black">
                    {distance.toFixed(2)} km
                  </span>{" "}
                  from DineFlow. We currently deliver
                  within 5 km.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;