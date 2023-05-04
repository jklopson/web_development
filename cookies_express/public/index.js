var express = require('express')
var app = express();
let https = require('https')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static_files'))
app.set('view engine', 'ejs')

// -------------- express 'get' handlers -------------- //
app.get('/', (req,res) =>{

	let cookie_name = 'JKLOPAPAPAPAPA'
	let cookie_value = '0293847LALALALALALA'

	res.cookie(cookie_name, cookie_value, {maxAge: 360000})
	
    console.log('Cookies: ', req.cookies)

	res.render('template', {cookie_name: cookie_name, cookie_value: cookie_value})
})


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});