var firstEntry ={
	"id": "first",
	"class": "content",
	"title": "My First Entry",
	"question": "Why I took this class.",
	"entry": "I took this class because I'm interested in learning anything computer related. Plus, I wanted to know if I would take this well. What I wantd to get out of this class. I want to get knowledge on how to program."
};

var secondEntry = {
	"id": "second",
	"class": "content",
	"title": "UX vs. UI",
	"entry": "UX is the users experience with what the dev created. Whether or not it was aeshetically pleasing, did it work, did they like how it worked. UI is the user interface, what they see on the screen. Things such as color of the backround, the font and size of the characters, the pictures."
};

var thirdEntry = {
	"id": "third",
	"class": "content",
	"title": "HTML and CSS",
	"entry": "HTML is short for Hypertext Markup Language. It is the code behind the things you see on a web page. It is done by using tags to achieve things like font, color, and images.CSS is short for Cascading Style Sheets. It is used as a way to save time. It is an easier way to define HTML elements, attributes, and styles."
};

var fourthEntry = {
	"id": "fourth",
	"class": "content",
	"title": "Responsive Design",
	"entry": "An example of Responsive Design is when a webiste adapts to the changes to the browser. For example the images and text on a website miniminzing when the browser size changes."
};

var fifthEntry = {
	"id": "fifth",
	"class": "content",
	"title": "DigimonGo",
	"entry": "This is, in my opinion, is a taste of the essence of the daily life of a programmer. It was soul-suckingly frustrating to the point I start to question my own existence. It is by far the most difficult of all the things we done so far, to me."
};

var sixthEntry = {
	"id": "sixth",
	"class": "content",
	"title": "Media Queries",
	"entry": "It was difficult at first but I understood the basics after a while, although it took a bit. Plus, I am not exactly confident about the more advanced maneuvers. All in all, I don't like it."
};

var seventhEntry = {
	"id": "seventh",
	"class": "content",
	"title": "Basic Javascript",
	"entry": "It is easy to understand and implement, something I like about it. Despite my struggles due to my refusal to set up my git at home, I managed to do most of the work with varying degrees of success. I like it."
};

var eigthEntry = {
	"id": "eigth",
	"class": "content",
	"title": "Conditionals",
	"entry": "Because I was gone and I don't do work at home, this made me really confused. But, after some review, I was able to understand it. I like this too."
};

var ninthEntry = {
	"id": "ninth",
	"class": "content",
	"title": "Verizon App Challenge",
	"entry": "1. People are too shy to get help, or are unable to due to there being too many people. 2. Our app allows anonymous communication between students and counsilors. This allows for the shy ones and the one unable to speak with them easily talk to them over the app.  3. I would add more transitions.              4. Anonymous chat communication.             5. Scheduling.                               6. Interpersonal and communcation problems.                                    7. We would start earlier."
};

var tenthEntry = {
	"id": "tenth",
	"class": "content",
	"title": "How did the semester go?",
	"entry": "Throughout the semester I have been enjoying the coding experience. Althought, at times, I wanted nothing other than to bash my own head into a wall. Coding has challenged me time and time again, no matter what we were doing. Sometimes, at first, I would be doing fine. Then, we would start doing something more advanced and I start going insane. Granted I always did get it in the end, but it still did not make the experience any less mind-bendingly annoyng."
};

var div = document.createElement("div");
var h1 = document.createElement("h1");
var p = document.createElement("p");
var targetH1 = document.getElementsByTagName("h1");
var argetP = document.getElementsByTagName("p");
var journalEntries = [firstEntry,
					 secondEntry, 
					 thirdEntry, 
					 fourthEntry, 
					 fifthEntry, 
					 sixthEntry, 
					 seventhEntry, 
					 eigthEntry, 
					 ninthEntry, 
					 tenthEntry];

//inputting text for the first entry
h1[0].innerText = journalEntries[0].title;
p[0].innerText = journalEntries[0].entry;



