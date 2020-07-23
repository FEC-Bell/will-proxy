const express = require('express');
const path = require('path');
const Axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/public')));


app.get('/app/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/public/index.html'));
});


app.get('/api/gamereviews/:gameId', (req, res) => {
  Axios.get('http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001/api/gamereviews/' + req.params.gameId)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});



app.get('/api/reviewcount/:gameId', (req, res) => {

  Axios.get('http://localhost:3002/api/reviewcount/' + req.params.gameId)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


app.get('/api/tags/:gameId', (req, res) => {
  Axios.get('http://localhost:3006/api/tags/' + req.params.gameId)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});



app.get('/api/dlc/:gameId', (req, res) => {
  Axios.get('http://ec2-54-193-86-65.us-west-1.compute.amazonaws.com:3003/main.js' + req.params.gameId)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});



app.get('/api/name/:gameId', (req, res) => {
  let param = req.params.gameId;

});


app.get('/api/media/:gameId', (req, res) => {

  // This gets the same photos when I run on local host. Need to confirm when deployed
  Axios.get('http://ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004/api/media/' + req.params.gameId)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});