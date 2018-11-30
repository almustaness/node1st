const express = require('express');
const hbs = require('hbs');

// express call
var app = express();
// Partial views setup
hbs.registerPartials(__dirname + '/views/partials');
// handlebar setup
app.set("view engine","hbs");
/*Helpers help us to render them in views instead of passing common values
 in each route. Each helps has a name and we render it using that name.*/
hbs.registerHelper("getFullYear", ()=>{
	return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text)=>{
	return text.toUpperCase();
});

app.use((req, res, next)=>{
next();
});

// static files setup
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
  	res.render('home.hbs',{
  		pageTitle:"Home",
		welcomeMessage:"Welcome to my website."	
  	});
});

app.get('/about', (req, res)=>{
	res.render('about.hbs',{
		pageTitle:"About",
	});
});



app.listen(3000, ()=>{
	console.log("Server is running...");
});
