require('dotenv').config();
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const pool = require('./db');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/available_schedules', async (req, res, next) => {
	try {
		const workHours = await pool.query(`SELECT * FROM admin.available_schedules`);
    return res.json(workHours.rows);
	} catch (err) {
		console.error(err.message);
	}
});


app.get('/admin.vendor_stores', async (req, res, next) => {
  try {
      const stores = await pool.query(`SELECT * FROM admin.vendor_stores`);
      return  res.status(200).json(stores.rows);
    } catch (err) {
    console.error(err.message);
  }
});


app.get('/service.areas', async (req, res) => {
  try {
    const areas = await pool.query(`SELECT * FROM service.areas`);
    res.json(areas.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/service.schedules_and_prices', async (req, res, next) => {
  try {
    const prices = await pool.query(`SELECT * FROM service.schedules_and_prices`);
		return res.status(200).json(prices.rows);
	} catch (err) {
    console.error(err.message);
	}
});

app.get('/admin.vendor_store_work_hours', async (req, res, next) => {
  try {
    const workHours = await pool.query(`SELECT * FROM admin.vendor_store_work_hours`);
    return res.json(workHours.fields);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports.handler = serverless(app);
