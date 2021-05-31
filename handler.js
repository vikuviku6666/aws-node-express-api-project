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

app.get('/weekly_schedule', async (req, res, next) => {
	try {
		const workHours =
			await pool.query(`select * from admin.get_schedule_week('33a21510-bb57-11eb-954e-1fd2bb5e2ba6','33a2be48-bb57-11eb-954e-cf32ff9040f0')
limit 5`);
		return res.json(workHours.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports.handler = serverless(app);
