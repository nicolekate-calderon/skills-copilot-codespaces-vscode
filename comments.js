//Create web server
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Create a comments array
let comments = [
    { id: 1, author: 'John', content: 'I love this blog' },
    { id: 2, author: 'Mary', content: 'Nice post' },
    { id: 3, author: 'Alex', content: 'Good job' }
];

//Create a GET request to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//Create a POST request to post a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
    };
}); // Add the missing closing curly brace here
