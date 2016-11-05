var express = require('express'),     
	app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static((__dirname, 'public')));
	
app.post('/signup', function(req, res) {
	res.send('Hey, <br/> Thanks for your interest... <br/>  I am wrtiting the code for validation now... <br/>  See you soon...<br/>    - Suman Barick');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
