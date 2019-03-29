import { Router } from "express";
import { randomData } from "@mock/users";
import API from "@API";

const router = Router();

router.get(API.USERS, (req, res) => {
  res.status(200).send(randomData);
});

export default router;
