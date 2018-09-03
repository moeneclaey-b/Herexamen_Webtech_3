const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

var randomInt = getRandomInt(20);
var json = require(__dirname + '/answers.json');

app.post('/answers', (req, res) => {
	console.log(json.answers[randomInt])
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
	res.send(json.answers[randomInt])
})