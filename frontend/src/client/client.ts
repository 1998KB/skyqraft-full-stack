import axios from "axios";

const baseURL = "https://widgets-tbmu4bzega-uc.a.run.app/";

export const postLocation = () => {
  return axios
    .post(baseURL + "location")
    .then((response) => {
      console.log("Location posted successfully! ");
      return response.data;
    })
    .catch((error) => {
      console.error("Error posting location: ", error);
      throw error;
    });
};

export const getAllLocations = () => {
  return axios
    .get(baseURL + "locations")
    .then((response) => {
      console.log("Locations retrieved successfully!");
      return response.data;
    })
    .catch((error) => {
      console.error("Error retrieving locations:", error);
      throw error;
    });
};
