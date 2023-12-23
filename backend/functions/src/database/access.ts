import {
  setDoc,
  doc,
  getDocs,
  collection,
  Timestamp,
} from "firebase/firestore";
import { db } from "./init";
import { logger } from "firebase-functions/v1";
import { randomUUID } from "crypto";
import axios from "axios";

export const postLocation = async (coordinates: {
  lat: number;
  lng: number;
}) => {
  try {
    const id = randomUUID();
    logger.info("postLocation: " + id);
    const geocodingResponse = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${coordinates.lat}+${coordinates.lng}&key=2c023f54244441ccbfce59f2926419bc`
    );
    const country =
      geocodingResponse.data.results[0]?.components.country || "Unknown";
    await setDoc(doc(db, "Location", id), {
      coordinates: { lat: coordinates.lat, lng: coordinates.lng },
      country: country,
      timestamp: Timestamp.now(),
    });

    return { coordinates: coordinates };
  } catch (error: any) {
    logger.error(`Error posting poem: ${error.message}`);
    throw error;
  }
};

export const getAllLocations = async () => {
  try {
    const locations: any = [];
    const querySnapshot = await getDocs(collection(db, "Location"));
    querySnapshot.forEach((doc) => {
      locations.push({ ...doc.data(), id: doc.id });
    });
    return locations;
  } catch (error: any) {
    logger.error(`Error fetching locations: ${error.message}`);
    throw error;
  }
};
