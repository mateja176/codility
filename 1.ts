import express from 'express';

const app = express();
app.use(express.json());

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

const users = [];

app.post('/api/user', (req, res) => {
  // ...

  const userDto = JSON.parse(req.body);

  if (Object.values(userDto).some(value => !value)) {
    res.sendStatus(401);
  }

  users.push(userDto);

  res.sendStatus(201);
});

app.post('/api/authenticate', (req, res) => {
  // ...
});

app.post('/api/logout', (req, res) => {
  // ...
});

app.post('/api/articles', (req, res) => {
  // ...
});

app.get('/api/articles', (req, res) => {
  // ...
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
