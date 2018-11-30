const express = require('express');
const hbs = require('hbs');

/* This to grab the port number from the operating system or to set it to 
3000 in case it is not availabe.*/
const port = process.env.PORT || 3000;
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



app.listen(port, ()=>{
	console.log(`Server is running on ${port}`);
});
