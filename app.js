var firstEntry ={
	"id": "first",
	"title": "My First Entry",
	"entry": "I took this class because I'm interested in learning anything computer related. Plus, I wanted to know if I would take this well. What I wantd to get out of this class. I want to get knowledge on how to program."
};

var secondEntry = {
	"id": "second",
	"title": "UX vs. UI",
	"entry": "UX is the users experience with what the dev created. Whether or not it was aeshetically pleasing, did it work, did they like how it worked. UI is the user interface, what they see on the screen. Things such as color of the backround, the font and size of the characters, the pictures."
};

var thirdEntry = {
	"id": "third",
	"title": "HTML and CSS",
	"entry": "HTML is short for Hypertext Markup Language. It is the code behind the things you see on a web page. It is done by using tags to achieve things like font, color, and images.CSS is short for Cascading Style Sheets. It is used as a way to save time. It is an easier way to define HTML elements, attributes, and styles."
};

var fourthEntry = {
	"id": "fourth",
	"title": "Responsive Design",
	"entry": "An example of Responsive Design is when a webiste adapts to the changes to the browser. For example the images and text on a website miniminzing when the browser size changes."
};

var fifthEntry = {
	"id": "fifth",
	"title": "DigimonGo",
	"entry": "This is, in my opinion, is a taste of the essence of the daily life of a programmer. It was soul-suckingly frustrating to the point I start to question my own existence. It is by far the most difficult of all the things we done so far, to me."
};

var sixthEntry = {
	"id": "sixth",
	"title": "Media Queries",
	"entry": "It was difficult at first but I understood the basics after a while, although it took a bit. Plus, I am not exactly confident about the more advanced maneuvers. All in all, I don't like it."
};

var seventhEntry = {
	"id": "seventh",
	"title": "Basic Javascript",
	"entry": "It is easy to understand and implement, something I like about it. Despite my struggles due to my refusal to set up my git at home, I managed to do most of the work with varying degrees of success. I like it."
};

var eigthEntry = {
	"id": "eigth",
	"title": "Conditionals",
	"entry": "Because I was gone and I don't do work at home, this made me really confused. But, after some review, I was able to understand it. I like this too."
};

var ninthEntry = {
	"id": "ninth",
	"title": "Verizon App Challenge",
	"entry": " People are too shy to get help, or are unable to due to there being too many people.  Our app allows anonymous communication between students and counsilors. This allows for the shy ones and the one unable to speak with them easily talk to them over the app.  I would add more transitions. Anonymous chat communication. Scheduling. Interpersonal and communcation problems. We would start earlier."
};

var tenthEntry = {
	"id": "tenth",
	"title": "How did the semester go?",
	"entry": "Throughout the semester I have been enjoying the coding experience. Althought, at times, I wanted nothing other than to bash my own head into a wall. Coding has challenged me time and time again, no matter what we were doing. Sometimes, at first, I would be doing fine. Then, we would start doing something more advanced and I start going insane. Granted I always did get it in the end, but it still did not make the experience any less mind-bendingly annoyng."
};



var firstList = {
	"title": "Resources",
	"text": "All the resources I have used throughout my time coding.",
	"link1": "https://www.w3schools.com/",
	"link2": "http://stackoverflow.com/"
}

var secondList = {
	"title": "Personal",
	"text": "Websites you can find me in.",
	"link1": "https://github.com/MarkIsNotTaken/",
	"link2": "https://medium.com/@Segnis"
}

var contain = document.getElementById("container2");
var targetDiv = document.getElementsByTagName("div");
var targetClass = document.getElementsByClassName("content");
var targetH1 = document.getElementsByTagName("h1");
var targetP = document.getElementsByTagName("p");


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

var journalLists = [firstList,
					secondList];

//creating the divs in the container
function entryContainer(){
	for(i = 0; i < journalEntries.length; i++){
		var div = document.createElement("div");
		var id = document.createAttribute("id");
		var h1 = document.createElement("h1");
		var p = document.createElement("p");
		document.getElementById("container2").appendChild(div);
		var divs = document.getElementById("container2").children;
		divs[i].setAttribute("class", "content");
		targetClass[i].setAttribute("id", journalEntries[i].id);
		targetClass[i].appendChild(h1);
		targetClass[i].appendChild(p);
		var textContainer = divs[i].children;
		textContainer[0].innerText = journalEntries[i].title;
		textContainer[1].innerText = journalEntries[i].entry;
	}
}

function asideContainer(){
		var aside = document.createElement("aside");
		var nav = document.createElement("nav");
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		var h5 = document.createElement("h5");
		var id = document.createAttribute("");
		document.getElementById("container1").appendChild(aside);

}

asideContainer();
entryContainer();




