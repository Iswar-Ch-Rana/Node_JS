require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();

// Connection to DB
mongoose.connect(process.env.DB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error ", err));


// Schema
const empSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Emp = mongoose.model("employee", empSchema);


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this line to parse JSON data in requests


// REST API
app.get('/api/users', async (req, res) => {
    const allDbEmp = await Emp.find({});
    res.send(allDbEmp);
});

app.route('/api/users/:id')
    .get(async (req, res) => {
        const emp = await Emp.findById(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch(async (req, res) => {
        const emp = await Emp.findById(req.params.id);
        if (!emp) {
            return res.status(404).json({ error: "User not found" });
        }

        await Emp.findByIdAndUpdate(req.params.id, { first_name: req.body.first_name });
        return res.json({ status: "Success" });
    })
    .delete(async (req, res) => { // Use app.delete() instead of app.app.delete()
        const emp = await Emp.findById(req.params.id);
        if (!emp) {
            return res.status(404).json({ error: "User Not Found" });
        }
        await Emp.findByIdAndDelete(req.params.id);
        return res.json({ status: "Emp Deleted" });
    });

app.post('/api/users', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name ||
        !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All Fields are req..." });
    }
    const result = await Emp.create({
        first_name: body.first_name,
        last_name: body.last_name,
        job_title: body.job_title,
        gender: body.gender,
        email: body.email,
    });
    return res.status(201).json({ msg: "success" });
});

app.listen(process.env.PORT, () => console.log("Server is running on port 3000"));
