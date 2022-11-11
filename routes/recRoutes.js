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
    getUser
} = require('../controllers/recController');

router.get('/get/:userid/:id', getRecById);
router.get('/get/:userid/:category', getRecByCategory);
router.get('/get/:id', getUser);
router.get('/get/:userid/:subject', getRecBySubject);
router.get('/get/:userid', getAllRec);

router.post('/create/record', createRec);
router.post('/create/user', createUser);

router.put('/update/:id', updateRec);

router.delete('/delete/:id', deleteRec);

module.exports = router;








module.exports = router;