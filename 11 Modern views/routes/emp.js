const express = require('express');
const { handleGetAllEmp, handleGetEmpById, handleUpdateEmpById, handleDeleteEmpById, handleCreateNewEmp } = require('../controllers/emp');

const router = express.Router();



// REST API
router.route('/')
    .get(handleGetAllEmp)
    .post(handleCreateNewEmp);
router.route('/:id')
    .get(handleGetEmpById)
    .patch(handleUpdateEmpById)
    .delete(handleDeleteEmpById);


module.exports = router;
