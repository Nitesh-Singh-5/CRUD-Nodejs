import express from "express";
const router = express.Router();
import studentController from '../controllers/studentController.js'


router.get('/', studentController.getAllDoc);
router.post('/', studentController.craeteDoc);
router.get('/edit/:id', studentController.editDoc);
router.post('/update/:id', studentController.updateDoc);
router.post('/delete/:id', studentController.DeleteDocbyId);


export default router;