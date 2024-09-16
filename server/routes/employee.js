import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'
import {addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee, upload} from '../controllers/employeeController.js';


const router = express.Router();

router.post('/add', authMiddleware,upload.single('image'), addEmployee);
router.get('/', authMiddleware, getEmployees);
router.get('/:id', authMiddleware, getEmployee);
router.put('/:id', authMiddleware, updateEmployee); 
router.delete('/:id', authMiddleware, deleteEmployee);

export default router 