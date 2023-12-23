const { onRequest } = require("firebase-functions/v2/https");
import * as express from "express";
import Widget from "./database";
import { getFullLocation } from "./api /location";
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.set("trust proxy", true);

app.post("/location", async (req, res) => {
  const fullLocation = await getFullLocation(req.ip!);
  const newLocation = await Widget.postLocation({
    lat: fullLocation.lat,
    lng: fullLocation.lon,
  });
  res.status(201).send(newLocation);
});

app.get("/locations", async (req, res) => {
  const locations = await Widget.getAllLocations();
  res.status(201).send(locations);
});

exports.widgets = onRequest(app);
