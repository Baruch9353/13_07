import pool from './db.js';

export const getAllProsucts = async (req, res) => {
    const [rows] = await pool.query(
      "SELECT * FROM products"
    );
    res.json(rows);
};

export async function getCustomerNameByCountry(req, res) {
  const country = req.params.country;
  if (!country) return res.status(400).send("Missing country parameter");
    const [rows] = await pool.query(
      "SELECT customerName FROM customers WHERE country = ?",
      [country]
    );
    res.json(rows);
};

export async function getEmployeesByReportsTo (req, res) {
    const reportsTo = req.params.reportsTo; 
    if (!reportsTo) return res.status(400).send("Missing ReportsTo parameter");
    const [rows] = await pool.query(
      "SELECT `firstName`,`lastName` FROM `employees` WHERE `reportsTo` = ?", 
      [reportsTo]
    );
    res.json(rows);
};


export async function getSumQuantityInStockByProductLine (req, res) {
    const productLine = req.params.productLine; 
    if (!productLine) return res.status(400).send("Missing product ine parameter");
    const [rows] = await pool.query(
      "SELECT SUM(quantityInStock) AS totalInStock FROM products WHERE productLine = ? ;", 
      [productLine]
    );
    res.json(rows);
};
