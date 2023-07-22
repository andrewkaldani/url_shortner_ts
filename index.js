const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req,res) => {
    challenge =  "https://codingchallenges.fyi/challenges/challenge-url-shortener"
    res.redirect(302,challenge)
})

app.get('/solution',(req,res) => {
    msg = `Welcome to my URL shortner! This is part of John Crickett's coding 
    challenges. You can view this challenge here  
    https://codingchallenges.fyi/challenges/challenge-url-shortener 
    You can also view my github solution to this here 
    https://github.com/andrewkaldani/url_shortner`
    res.send(msg)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})