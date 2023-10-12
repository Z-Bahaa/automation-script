const express = require('express');
const axios = require('axios');

const app = express();

const data = {
  "event": {  
    "actor_id": "user_3VG742j9PUA2",
    "actor_name": "zeyad bahaa",
    "group": "instatus.com",
    "action": {
      "name": "user.searched_activity_log_events"
    },
    "target_id": "user_DOKVD1U3L031",
    "target_name": "sami@instatus.com",
    "location": "105.40.62.95",
    "occurred_at": new Date(),
    "metadata": {
      "redirect": "/setup",
      "description": "User login failed.",
      "x_request_id": "req_W4Y47lljg85H"
    }
 }
}

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const sendPostRequest = () => {

  const data = {
    "event": {  
      "actor_id": "user_3VG742j9PUA2",
      "actor_name": "zeyad bahaa",
      "group": "instatus.com",
      "action": {
        "name": "user.searched_activity_log_events"
      },
      "target_id": "user_DOKVD1U3L031",
      "target_name": "sami@instatus.com",
      "location": "105.40.62.95",
      "occurred_at": new Date(),
      "metadata": {
        "redirect": "/setup",
        "description": "User login failed.",
        "x_request_id": "req_W4Y47lljg85H"
      }
   }
  }

  axios.post('https://instalog.fly.dev/events/', data, options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

app.get('/', (_, res) => {
  res.json({"isWorking":"true"})
})
setInterval(
  sendPostRequest
, 30000);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});