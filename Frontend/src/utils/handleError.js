import { toast } from "react-hot-toast";

const handleError = (error, router, options = {}) => {
  const {
    redirectOn401 = false,
  } = options;

  // No response means the request probably never reached the backend.
  if (!error.response) {
    if (error.request) {
      toast.error(
        "Unable to connect to the server. Please check your internet connection."
      );
      return;
    }

    toast.error(error.message || "Something went wrong.");
    return;
  }

  const status = error.response.status;
  const message = error.response.data?.message;

  switch (status) {
    case 400:
      toast.error(message || "Invalid request. Please check your information.");
      break;

    case 401:
      toast.error(
        message || "Authentication failed. Please login again."
      );

      if (redirectOn401 && router) {
        router.push("/login");
      }

      break;

    case 403:
      toast.error(
        message || "You are not authorized to perform this action."
      );
      break;

    case 404:
      toast.error(
        message || "The requested resource was not found."
      );
      break;

    case 409:
      toast.error(
        message || "This information already exists."
      );
      break;

    case 422:
      toast.error(
        message || "The provided information is invalid."
      );
      break;

    case 429:
      toast.error(
        message || "Too many requests. Please try again later."
      );
      break;

    default:
      if (status >= 500) {
        toast.error(
          "Something went wrong on the server. Please try again later."
        );
      } else {
        toast.error(
          message || "Something went wrong. Please try again."
        );
      }
  }
};

export default handleError;