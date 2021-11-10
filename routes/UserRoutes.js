'use strict';
const express = require('express');
const router = express.Router();

// UserRoutesApi
var UserRoutesApi = require('../apiutils/UserRoutesApi');
router.get('/getuser', UserRoutesApi.GetUserDetails);
router.post('/updateuser', UserRoutesApi.CreateNewUser);
router.put('/updateuser', UserRoutesApi.UpdateUserDetails);
router.delete('/deleteuser', UserRoutesApi.DeleteUserDetails);

//Return router
module.exports = router;