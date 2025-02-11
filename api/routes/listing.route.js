import express from "express";
import { createListing, deleteListing, editListing, getListing, getListings } from "../controlers/listing.controler.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/edit/:id', verifyToken, editListing);
router.get('/get/:id', getListing);
router.get('/:id', getListings);

export default router;