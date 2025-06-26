const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// TEMPORARY STORAGE (no database)
let contacts = [];
let blogs = [];

// Routes
app.post('/api/contact', (req, res) => {
  contacts.push(req.body);
  console.log("New contact message received:", req.body); // 👈 Add this line
  res.json({ message: "Message received (not saved permanently)" });
});


app.post('/api/blogs', (req, res) => {
  blogs.push(req.body);
  console.log("New blog received:", req.body);
  res.status(201).json({ message: "Blog posted" });
});

// 📥 Get all blogs
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});