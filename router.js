import express from 'express';
import { 
    getAllProsucts,
    getCustomerNameByCountry,
    getEmployeesByReportsTo,
    getSumQuantityInStockProductLine
 } from './service.js';

const router = express.Router();

router.get('/products', getAllProsucts);
router.get('/customerName/:country', getCustomerNameByCountry);
router.get('/employees/:reportsTo', getEmployeesByReportsTo)
router.get('/sumProducts/:productLine', getSumQuantityInStockProductLine)
export default router;