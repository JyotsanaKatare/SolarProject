
import express from 'express';
const router = express.Router();
import form from '../controllers/formController.js';

console.log("Form routes loaded");
router.get("/free_quote", form.freeQuote);
router.post("/contact_us", form.contactUs);

export default router;
