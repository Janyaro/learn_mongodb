const express = require('express');
const app = express();
const port = process.env.port ||3000;

app.listen(port , () =>{
    console.log (`app is start at the port ${port}`);
})

app.get('/api/jokes' , (req,res) =>{
    const jokes = [
  {
    "id": 1,
    "title": "Programmer's Dinner",
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    "id": 2,
    "title": "Recursive Humor",
    "joke": "To understand recursion, you must first understand recursion."
  },
  {
    "id": 3,
    "title": "Database Dating",
    "joke": "I would tell you a SQL joke, but you might not join me."
  },
  {
    "id": 4,
    "title": "Boolean Trouble",
    "joke": "There are only 10 types of people in the world: those who understand binary and those who don’t."
  },
  {
    "id": 5,
    "title": "JavaScript Reality",
    "joke": "Why did the JavaScript developer go broke? Because he kept using 'var' when he should've used 'let it go'."
  }
]

    res.send(jokes);
})