const express = require('express');
const router = express.Router();
const {
    getRecById,
    getRecBySubject,
    getRecByCategory,
    updateRec,
    deleteRec,
    createUser,
    createRec,
    getAllRec,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/recController');

router.get('/get/byid/:userid/:id', getRecById);
router.get('/get/bycategory/:userid/:category', getRecByCategory);
router.get('/get/:id', getUser);
router.get('/get/bysubject/:userid/:subject', getRecBySubject);
router.get('/get/all/:userid', getAllRec);

router.post('/create/record', createRec);
router.post('/create/user', createUser);

router.put('/update/rec/:id', updateRec);
router.put('/update/user/:id', updateUser);

router.delete('/delete/rec/:id', deleteRec);
router.delete('/delete/user/:id', deleteUser);

module.exports = router;








module.exports = router;