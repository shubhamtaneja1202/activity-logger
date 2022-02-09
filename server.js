const express = require('express');
const activeWin = require('active-win');
const app = express()
const port = 3000;
const screenshot = require('screenshot-desktop')


// logging activity every two mins
setInterval(async () => {
  const window = await activeWin();
  console.log(window);
}, 10000);


// taking screenshot every 5 mins
setInterval(async () => {
  screenshot({format: 'png', linuxLibrary : 'imagemagick'}).then((img) => {
   console.log(img)
  }).catch((err) => {
    console.log('err', err);
    console.log('error getting screenshot. Please contact Administrator');
  })
}, 10000);



// running the server on port
app.listen(port, async() => {
  let username;
  console.log('running');
  // let userCheck = await service.checkUser(username);
  // // user name check
  // if(userCheck.failed){
  //   if(userCheck.error = 'NO_USER_FOUND'){
  //     console.log('incorrect username, please provide correct username');
  //   }
  //   else if(userCheck.error = 'INCORRECT_MACHINE'){
  //     console.error(`This user is already registered with different machine, Please provide ${userCheck.machine_id} to administrator`);
  //     process.exit();
  //   }
  //   else {
  //     console.error('Not able to login, something went wrong. Please contact administrator');
  //     process.exit();
  //   }
  // }
  
  // if(userCheck.newLogin){
  //   console.log(`${username} is registered and log in now, activity is getting tracked. Please click on esc to close it again.`);
  // } else {
  //   console.log(`${username} is log in now, activity is getting tracked. Please click on esc to close it again.`);
  // }
 
})