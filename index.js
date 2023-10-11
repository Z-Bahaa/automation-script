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
    "occurred_at": "2022-01-05T14:31:13.607Z",
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
  axios.post('https://instalog.fly.dev/events/', data, options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

setInterval(sendPostRequest, 30000);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});