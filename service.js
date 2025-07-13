import pool from './db.js';
export const getAllProsucts = async (req, res) => {
    const [rows] = await pool.query(
      "SELECT * FROM products"
    );
    res.json(rows);
};

