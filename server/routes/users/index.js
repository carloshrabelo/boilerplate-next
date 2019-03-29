import { Router } from "express";
import fetch from "node-fetch";

import API from "@API";
import APIBE from "@APIBE";

const router = Router();

router.get(API.USERS, async (req, res) => {
  const response = await fetch(APIBE.USERS);
  const { data } = await response.json();
  res.status(200).send(data);
});

export default router;
