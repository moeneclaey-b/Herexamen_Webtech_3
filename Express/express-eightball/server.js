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
var question = null;
var rand = randomInt;

/*app.post('/answers', (req, res) => {
	console.log(json.answers[randomInt])
})*/

app.post('/answers', (req, res) => {
	window.sessionStorage.setItem('question', JSON.stringify(req.body))
	window.sessionStorage.setItem('answer', JSON.stringify(rand))
	var quest = JSON.parse(window.sessionStorage.getItem('question'))
	var answer = JSON.parse(window.sessionStorage.getItem('answer'))
	if (req.body == window.sessionStorage.quest){
		res.sendFile(__dirname + '/answers.html')
		res.send(json.answers[window.sessionStorage.answer])
	}else{
		res.sendFile(__dirname + '/answers.html')
		res.send(json.answers[randomInt])
	}
})