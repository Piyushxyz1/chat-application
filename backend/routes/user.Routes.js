import express from 'express';
import {getUsersForSidebars} from "../controllers/user.controller.js";
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/',protectRoute,getUsersForSidebars)






export default router
