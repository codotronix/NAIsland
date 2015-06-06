var express = require('express'),     
	app = express();

app.use(express.static((__dirname, 'public')));
	
app.post('/signup', function(req, res) {
	res.send('Hey, <br/> Thanks for your interest... <br/>  I am wrtiting the code for validation now... <br/>  See you soon...<br/>    - Suman Barick');
});

app.listen(9090);
console.log('Node Express Server running at localhost:9090');