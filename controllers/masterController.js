const asyncHandler = require('express-async-handler');
const { User, Record } = require('../modal/recModal');


const updateRecords = asyncHandler(async (userId, recId) => {
    return await User.findOneAndUpdate(
    { _id: userId }, 
    { $push: { records: recId }});

    });
// get record methods 
const getAllUserRec = asyncHandler(async (userId) => {
    return await User
   .findOne({_id: userId })
   .populate({
      path: "records"
   })

//    .then(user => {
//       return user;
//    });
})

const getUserRecById = asyncHandler(async (userId, recId) => {
    // nested populate
    return await User
    .findOne({_id: userId})
    .populate({
    path: "records",
    match: { _id: {$eq: recId}}
    })
    // .then(user => {
    //     return user;
    //  });
});

const getUserRecBySubject = asyncHandler(async (userId, subject) => {
    return await User
    .findOne({_id: userId})
    .populate({
    path: "records",
    match: { subject: {$eq: subject}}
    })
    // .then(user => {
    //     return user;
    //  });
});

const getUserRecByCategory = asyncHandler(async (userId, category) => {
    return await User
    .findOne({_id: userId})
    .populate({
    path: "records",
    match: { category: {$eq: category}}
    })
    // .then(user => {
    //     return user;
    //  });
});

const getUserInfo = asyncHandler(async (userId) => {
    return await User.findById(userId);
})

// update methods
const updateRecById = asyncHandler(async (recId, updates) => {
    // add code to check if the user the record 
    // Record.updateOne({ _id: recId }, updates);
    return await Record.findByIdAndUpdate(recId, updates, {
        new: true,
    });
    //                         function (err, docs) {
    // if (err){
    //     return err;
    // }
    // else{
    //     return `Updated Record ${docs}`;
    // }
});
// update methods
const updateUserById = asyncHandler(async (userId, updates) => {
    // add code to check if the user the record 
    // Record.updateOne({ _id: recId }, updates);
    return await User.findByIdAndUpdate(recId, updates, {
        new: true,
    });
    //                         function (err, docs) {
    // if (err){
    //     return err;
    // }
    // else{
    //     return `Updated Record ${docs}`;
    // }
});



const deleteRecById = asyncHandler(async (recId) => {
    return await Record.findByIdAndDelete(recId)
//         , function (err, docs) {
//         if (err){
//             return err;
//         }
//         else{
//             return `Deleted Record ${docs}`;
//         }
//     });
})
const deleteUserById = asyncHandler(async (recId) => {
    return await User.findByIdAndDelete(recId)
//         , function (err, docs) {
//         if (err){
//             return err;
//         }
//         else{
//             return `Deleted Record ${docs}`;
//         }
//     });
})
// userId, title, subject, value, max_value, category, date_done
const recCreate = asyncHandler(async (createObj) => {
    
    const rec = await Record.create(createObj);
    const a = updateRecords(rec.user, rec._id);
    return rec;

});


const userCreate = asyncHandler(async (createObj) => {
    // console.log(createObj);
    return await User.create(createObj);
});



module.exports = {
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
};
