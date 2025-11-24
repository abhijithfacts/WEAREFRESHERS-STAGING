import axios from "axios";

const createHttpRequest = async (
  url,
  gate = "open",
  body = {},
  config = { headers: { "Content-Type": "application/json" } }
) => {
  try {
    if (gate?.toLowerCase() === "secure") {
      let token = null;
      let details = null;

      if (typeof window !== "undefined") {
        token = sessionStorage.getItem("token");
        details = sessionStorage.getItem("usrDet");
      }

      if (details) {
        try {
          currentUserId = JSON.parse(details)?.id || null;
        } catch (parseError) {
          console.error("Failed to parse usrDet:", parseError);
        }
      }

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      } else {
        // Only throw error if we are on the client
        if (typeof window !== "undefined") {
          throw new Error("No token found. Please log in.");
        }
      }
    }

    const serverResponse = await axios.post(
      url,
      {
        // secure: gate.toLowerCase() === "open" ? false : true,
        ...body,
      },
      config
    );

    return serverResponse?.data;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      if (
        typeof window !== "undefined" &&
        error.response.data?.error === "Invalid or expired token."
      ) {
        alert("Your session has expired. Please log in again.");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Request setup error:", error.message);
    }
    throw error;
  }
};

export default createHttpRequest;
