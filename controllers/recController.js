const asyncHandler = require('express-async-handler');

const {
    getAllUserRec,
    getUserRecById,
    getUserRecBySubject,
    getUserInfo,
    updateRecById,
    recCreate,
    userCreate,
    getUserRecByCategory,
    deleteRecById,
    updateUserById,
    deleteUserById
} = require('./masterController');



const getRecById = asyncHandler(async (req, res) => {
    // try {
    //     getUserRecById()
        
    // } catch (error) {
        
    // }
    const rec = await getUserRecById(req.params.userid , req.params.id);

    res.status(200).json(rec);
    
});

const getRecBySubject = asyncHandler(async (req, res) => {
    const rec = await getUserRecBySubject(req.params.userid, req.params.subject);
    res.status(200).json(rec);
});
const getRecByCategory = asyncHandler(async (req, res) => {
    const rec = await getUserRecByCategory(req.params.userid, req.params.category);
    res.status(200).json(rec);

});
const updateRec = asyncHandler(async (req, res) => {
    const rec = await updateRecById(req.params.id, req.body);
    res.status(200).json(rec);

});
const updateUser = asyncHandler(async (req, res) => {
    const rec = await updateUserById(req.params.id, req.body);
    res.status(200).json(rec);

});
const deleteRec = asyncHandler(async (req, res) => {
    const rec = await deleteRecById(req.params.id);
    res.status(200).json(rec);

});
const deleteUser = asyncHandler(async (req, res) => {
    const rec = await deleteUserById(req.params.id);
    res.status(200).json(rec);

});
const createUser = asyncHandler(async (req, res) => {
    const user = await userCreate(req.body);

    res.status(200).json(user);

});
const createRec = asyncHandler(async (req, res) => {
    const rec = await recCreate(req.body);

    res.status(200).json(rec);

});
const getAllRec = asyncHandler(async (req, res) => {
    const recs = await getAllUserRec(req.params.userid);

    res.status(200).json(recs);

});
const getUser = asyncHandler(async (req, res) => {
    const user = await getUserInfo(req.params.id);
    res.status(200).json(user);

});


module.exports = {
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
};
