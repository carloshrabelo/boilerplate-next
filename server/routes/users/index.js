import { Router } from "express";
import fetch from "node-fetch";

import API from "../../API";

const router = Router();

router.get("/users", async (req, res) => {
  const response = await fetch(API.USERS);
  const { data } = await response.json();
  res.status(200).send(data);
});

export default router;
