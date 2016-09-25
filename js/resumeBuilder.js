/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Aaron HOU",
	"role": "web Developer",
	"contacts": {
		"mobile": "18688154142",
		"email": "housong313@163.com",
		"github": "heguang313",
		"location": "Guangzhou"
	},
	"welcomeMessage": "welcome",
	"skills": ["HTML","css","javascript","jQuery","Bootstrap"],
	"bioPic": "images/Aaron.jpg"
}

bio.display = function(){
	var $header = $("#header"),
		$contacts = $("#topContacts, #footerContacts");
		$header.prepend(HTMLheaderRole.replace("%data%", bio.role));
		$header.prepend(HTMLheaderName.replace("%data%", bio.name));

		$contacts.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$contacts.append(HTMLemail.replace("%data%", bio.contacts.email));
		$contacts.append(HTMLgithub.replace("%data%", bio.contacts.github));
		$contacts.append(HTMLlocation.replace("%data%", bio.contacts.location));

		$header.append(HTMLbioPic.replace("%data%", bio.bioPic));
		$header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$header.append(HTMLskillsStart);

		for (var i=0;i<bio.skills.length;i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
}
bio.display();

var work = {
	"jobs": [
	{
		"employer": "Gree",
		"title": "Electrical Engineer",
		"location": "Zhuhai",
		"dates": 2014,
		"description": "Providing technical support to the subsidiary. Following the big project and deal with the problem about electrical."
	}]
}

work.display = function(){
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer) + HTMLworkTitle.replace("%data%", work.jobs[0].title));
	$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[0].dates));
	$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[0].location));
	$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[0].description));
}
work.display();

var projects = {
	"projects":  [
	{
		"title": "Mockup to Article",
		"dates": "September 2016",
		"description": "Using HTML to converte a mockup of a blog article into a real website",
		"images": ["images/project_one.png"]
	},{
		"title": "Animal Trading Cards",
		"dates": "September 2016",
		"description": "A css project which is a card about Husky",
		"images": ["images/project_two.png"]
	},{
		"title": "Build a Portfolio Site",
		"dates": "September 2016",
		"description": "A responsive website that display images,description and links to each of the portfolio projects I have completed",
		"images": ["images/project_three.png"]
	}]
}

projects.display = function(){
	for (var i = projects.projects.length - 1;i >= 0; i--) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		for (var j = 0;j < projects.projects[i].images.length;j++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
		}
	}
}
projects.display();


var education = {
	"schools": [
	{
		"name": "South China University of Technology",
		"location": "Guangzhou",
		"degree": "Bachelor",
		"majors": ["electrical engineering"],
		"dates": "2010-2014",
		"url": "http://www.scut.edu.cn/"
	}],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com/course/ud804"
	}]
}

education.display = function(){
	$("#education").append(HTMLschoolStart);
	$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[0].name) + HTMLschoolDegree.replace("%data%", education.schools[0].degree));
	$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[0].dates));
	$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[0].location));
	$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[0].majors));
	$(".education-entry").append(HTMLonlineURL.replace("%data%", education.schools[0].url));

	$(".education-entry").append(HTMLonlineClasses.replace("%data%", education.onlineCourses[0]));
	$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school));
	$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates));
	$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[0].url));
}
education.display();

$("#mapDiv").append(googleMap);