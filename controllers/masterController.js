const asyncHandler = require('express-async-handler');
const { User, Record } = require('../modal/recModal');

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
    return await Record.findByIdAndUpdate(recId, updates)
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
// userId, title, subject, value, max_value, category, date_done
const recCreate = asyncHandler(async (createObj) => {
    
    return await Record.create(createObj);

});


const userCreate = asyncHandler(async (createObj) => {
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
    deleteRecById
};
