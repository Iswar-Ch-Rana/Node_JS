const Emp = require('../models/users');

async function handleGetAllEmp(req, res) {
    const allDbEmp = await Emp.find({});
    res.send(allDbEmp);
};

async function handleGetEmpById(req, res) {
    const emp = await Emp.findById(req.params.id);
    if (!emp) {
        return res.status(404).json({ error: "Employee Not found" });
    }
    return res.json(emp);
}

async function handleUpdateEmpById(req, res) {
    const emp = await Emp.findById(req.params.id);
    if (!emp) {
        return res.status(404).json({ error: "Employee not found" });
    }

    await Emp.findByIdAndUpdate(req.params.id, { first_name: req.body.first_name });
    return res.json({ status: "Success" });
}

async function handleDeleteEmpById(req, res) { 
    const emp = await Emp.findById(req.params.id);
    if (!emp) {
        return res.status(404).json({ error: "User Not Found" });
    }
    await Emp.findByIdAndDelete(req.params.id);
    return res.json({ status: "Emp Deleted" });
}

async function handleCreateNewEmp(req, res)  {
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
    return res.status(201).json({ msg: "success" , id : result._id });
}


module.exports = {
    handleGetAllEmp,
    handleGetEmpById,
    handleUpdateEmpById,
    handleDeleteEmpById,
    handleCreateNewEmp
}