'use strict';

var GetUserDetails = function(req, res){
	let queryString = req.query;
	console.log('GetUserDetails', queryString);
    let ErrorDetails = {'errorcode':'2390', 'reason': 'userid missing'};
    if(!queryString.userid){return res.status(400).json(ErrorDetails);}
	let SuccessDetails = {'Name':'NodeJs', 'City': 'Bangalore'};
    return res.send(SuccessDetails);
};

var CreateNewUser = function(req, res){
	let queryString = req.query;
	let bodyData = req.body;
	console.log('CreateNewUser', queryString, bodyData);
    let ErrorDetails = {'errorcode':'2390', 'reason': 'userid missing'};
    if(!bodyData.userid){return res.status(400).json(ErrorDetails);}
	let SuccessDetails = {'success':bodyData.userid};
    return res.send(SuccessDetails);
};

var UpdateUserDetails = function(req, res){
	let queryString = req.query;
	let bodyData = req.body;
	console.log('UpdateUserDetails', queryString, bodyData);
    let ErrorDetails = {'errorcode':'2390', 'reason': 'userid missing'};
    if(!bodyData.userid){return res.status(400).json(ErrorDetails);}
	let SuccessDetails = {'success':bodyData.userid};
    return res.send(SuccessDetails);
};

var DeleteUserDetails = function(req, res){
	let queryString = req.query;
	let bodyData = req.body;
	console.log('DeleteUserDetails', queryString, bodyData);
    let ErrorDetails = {'errorcode':'2390', 'reason': 'userid missing'};
    if(!bodyData.userid){return res.status(400).json(ErrorDetails);}
	let SuccessDetails = {'success':bodyData.userid};
    return res.send(SuccessDetails);
};

module.exports = {
	GetUserDetails : GetUserDetails,
	CreateNewUser: CreateNewUser,
	UpdateUserDetails: UpdateUserDetails,
	DeleteUserDetails: DeleteUserDetails
};