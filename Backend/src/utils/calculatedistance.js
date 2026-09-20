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

export default calculateDistance;