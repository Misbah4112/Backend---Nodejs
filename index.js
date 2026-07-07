require('dotenv').config();

const express = require('express');
//another way to emport express is
// import express from 'express';
const app = express();

const port = 3000;
const githubData = {
  login: "hiteshchoudhary",
  id: 11613311,
  node_id: "MDQ6VXNlcjExNjEzMzEx",
  avatar_url: "https://avatars.githubusercontent.com/u/11613311?v=4",
  html_url: "https://github.com/hiteshchoudhary",
  name: "Hitesh Choudhary",
  location: "India",
  blog: "https://hitesh.ai",
  twitter_username: "hiteshdotcom",
  public_repos: 124,
  followers: 58726,
  following: 0
};

app.get('/',(req,res)=>{
    res.send('hellow world')
})

app.get('/twitter',(req,res)=>{
    res.send('misbahdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login</h1>')

})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})