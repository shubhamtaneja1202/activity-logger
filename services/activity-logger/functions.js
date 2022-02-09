const db = require('../../utils/db');
const fs = require('fs')
const csv = require('csvtojson');
const file = require('.');
const status = {
    INITIALIZED : 0,
    FAILED : -1,
    SUCCESS : 1
}



const uploadScreenshot = async(fileId, value) =>{
    try {
        let requestData = [status[value],fileId]
        await db.runQuery('UPDATE csv_requests set status = ? where id = ?',requestData); 
        return true;
    }
    catch(err){
        throw err;
    }

}

const checkUser = async(fileId, value) =>{
    try {
        let requestData = [status[value],fileId]
        await db.runQuery('UPDATE csv_requests set status = ? where id = ?',requestData); 
        return true;
    }
    catch(err){
        throw err;
    }

}

const storeActivity = async(fileId, value) =>{
    try {
        let requestData = [status[value],fileId]
        await db.runQuery('UPDATE csv_requests set status = ? where id = ?',requestData); 
        return true;
    }
    catch(err){
        throw err;
    }

}


module.exports = {
    uploadScreenshot,
    checkUser,
    storeActivity
}