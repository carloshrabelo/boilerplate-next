import { Router } from "express";
import { randomData } from "../../../mock/users";

const router = Router();

router.get("/users", (req, res) => {
  res.status(200).send(randomData);
});

export default router;
