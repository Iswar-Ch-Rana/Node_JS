require('dotenv').config()
const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this line to parse JSON data in requests

// REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const Id = Number(req.params.id);
        const body = req.body;
        const userIndex = users.findIndex((user) => user.id === Id);

        const gotUser = users[userIndex];
        const updatedUser = { ...gotUser, ...body };
        users[userIndex] = updatedUser;
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: "Success", updatedUser });
        });
    })
    .delete((req, res) => { // Use app.delete() instead of app.app.delete()
        const id = Number(req.params.id);
        const userId = users.findIndex((user) => user.id === id);
        const delUser = users.splice(userId, 1)[0];
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.json({ status: "success", delUser });
        });
    });

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", id: users.length });
    });
});

app.listen(process.env.PORT, () => console.log("Server is running on port 3000"));
