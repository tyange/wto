import express from "express";
import routes from "../routes";
import { installation } from "../controllers/installationController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getMe,
} from "../controllers/userController";
import { home } from "../controllers/homeController";
import { mnp } from "../controllers/mnpController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.me, getMe);
globalRouter.get(routes.installation, installation);
globalRouter.get(routes.mnp, mnp);

export default globalRouter;
