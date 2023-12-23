import axios from "axios";

export const getFullLocation = (ip: string) => {
  return axios
    .get(`http://ip-api.com/json/${ip}`)
    .then((response) => {
      console.log("Full location retrieved successfully! ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error retrieving Full location: ", error);
      throw error;
    });
};
