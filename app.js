var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// defining variables.
// making a var for the two animal and their links.

var vote = 0;
var voteScout = [ 
    
    {
        vote: "Scout has " +vote,
        }
       ];
       
var voteToby = [
    {
        vote: "Toby has " +vote,
        }
        ];

var Scout = [
    {
        title: "You thought Scout was cute!",
        image_url: "https://hostsited2l.uwf.edu/content/enforced/980450-80243COP3813201608/cute-dog.jpg?_d2lSessionVal=4ha4M1rUwluueCQ85mRaHT0aA&ou=980450",
    }
];
var Toby = [
    {
        title: "You thought Toby was cute!",
       image_url: "https://hostsited2l.uwf.edu/content/enforced/980450-80243COP3813201608/cute-cat.jpg?_d2lSessionVal=4ha4M1rUwluueCQ85mRaHT0aA&ou=980450",
    }
];
   
   
    
// Endpoints
//the home is just the same as project 1.
//I used the vote/scout like the directions. I put the outcome to let voters know what they did.
//the res.render information is used to show the image as well as the outcome.
//It is also there to connect with the page.handlebars.
//without doing this and the handlebars correct you will get a 500 error.

app.get('/', function(req, res) {
	res.render('home');
});


app.get('/vote/scout', function(req,res){

	res.render('page',{
	     outcome: "You voted for Scout.",
	     content:Scout
	});

});

	
app.get('/vote/toby', function(req,res){

	res.render('page',{
	    outcome: "You voted for Toby.",
	    content:Toby,
	    
	    
	});
});

app.get('/vote/scout?showresults=true', function(req,res){

	res.render('page',{
	    outcome: voteScout,
	    
	});
});

app.get('/vote/toby?showresults=true', function(req,res){

	res.render('page',{
	    outcome: voteToby ,
	   
	});
});


// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
}); 


