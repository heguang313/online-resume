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
	"biopic": "images/Aaron.jpg"
};  

bio.display = function(){
	var $header = $("#header"),
		$contacts = $("#topContacts, #footerContacts");
		$header.prepend(
						HTMLheaderRole.replace("%data%", bio.role),
						HTMLheaderName.replace("%data%", bio.name)
					);

		$contacts.append(
						 HTMLmobile.replace("%data%", bio.contacts.mobile),
						 HTMLemail.replace("%data%", bio.contacts.email),
						 HTMLgithub.replace("%data%", bio.contacts.github),
						 HTMLlocation.replace("%data%", bio.contacts.location)
						);
		
		$header.append(
						HTMLbioPic.replace("%data%", bio.biopic),
						HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
						HTMLskillsStart
					);

		for (var i=0;i<bio.skills.length;i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
};
bio.display();

var work = {
	"jobs": [
	{
		"employer": "Gree",
		"title": "Electrical Engineer",
		"location": "Zhuhai",
		"dates": "2014",
		"description": "Providing technical support to the subsidiary. Following the big project and deal with the problem about electrical."
	}]
};

work.display = function(){
	$("#workExperience").append(HTMLworkStart);
	for (var i=0;i<work.jobs.length;i++) {
		$(".work-entry").append(
							HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + 
							HTMLworkTitle.replace("%data%", work.jobs[i].title),
							HTMLworkDates.replace("%data%", work.jobs[i].dates),
							HTMLworkLocation.replace("%data%", work.jobs[i].location),
							HTMLworkDescription.replace("%data%", work.jobs[i].description)
						);
	}	
};
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
};

projects.display = function(){
	for (var i = projects.projects.length - 1;i >= 0; i--) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(
										HTMLprojectTitle.replace("%data%", projects.projects[i].title),
										HTMLprojectDates.replace("%data%", projects.projects[i].dates),
										HTMLprojectDescription.replace("%data%", projects.projects[i].description)
									);
		for (var j = 0;j < projects.projects[i].images.length;j++) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
		}
	}
};
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
		"dates": "2016",
		"url": "http://www.udacity.com/course/ud804"
	}]
};

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for (var i=0;i<education.schools.length;i++) {
		$(".education-entry").append(
								 HTMLschoolName.replace("%data%", education.schools[i].name) + 
								 HTMLschoolDegree.replace("%data%", education.schools[i].degree),
								 HTMLschoolDates.replace("%data%", education.schools[i].dates),
								 HTMLschoolLocation.replace("%data%", education.schools[i].location),
								 HTMLschoolMajor.replace("%data%", education.schools[i].majors),
								 HTMLonlineURL.replace("%data%", education.schools[i].url),
								 HTMLonlineClasses.replace("%data%", education.onlineCourses[i]),
								 HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
								 HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
								 HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
								 HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
								);
	}	
};
education.display();

$("#mapDiv").append(googleMap);