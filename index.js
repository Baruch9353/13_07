import express from 'express';
import { config } from 'dotenv';
import  router from './router.js';
config();

const app = express();

app.use('/products', router); 
app.use('/products', router); 



app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})
