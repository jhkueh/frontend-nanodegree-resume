var bio = {
	"name": "Jiing H. Kueh",
	"role": "Freelance Web Developer",
	"contacts": {
		"mobile": "-",
		"email": "jhkueh@gmail.com",
		"github": "jhkueh",
		"location": "Melbourne, Au"
	},
	"bioPic": "images/profile.jpg",
	"welcomeMessage": "When something is important enough, you do it even if the ods are not in your favor. --Elon Musk",
	"skills": ["PHP/Laravel", 
						"Javascript: Vue.js, AngularJS, jQuery",
						"CSS: Bootstrap, Foundation, Bulma",
						"Misc: Git, Laradock, Laravel Homestead"]
};

var work = {
	"jobs": [
		{
			"employer": "Linkubi Marketing",
			"title": "Customer Service & Web Developer",
			"location": "Melbourne, Au",
			"dates": "Nov 2014 - present",
			"description": "> Handled and fulfilled clients MMS alerts orders.;br;> Rebuilt company’s MMS web creation interface and reduced MMS creation time by 2-3X."
		},
		{
			"employer": "JHKueh Web Artisan",
			"title": "Freelance Web Developer",
			"location": "Melbourne, Au",
			"dates": "May 2015 - present",
			"description": "> Helped clients to realise their dream website from conceptualisation to web hosting.;br;> Portfolio:-;br;>> GreatJourneyMigration.com.au;br;>> BagsPlusMore.com.au"
		},
		{
			"employer": "MelbournePraiseCentre.org.au",
			"title": "Web Developer",
			"location": "Melbourne, Au",
			"dates": "Dec 2012 - July 2013",
			"description": "> Built quizzes that saved at least 80 hours of data-entry work per year in PHP."
		}
	]
};

var project = {
	"projects": [
        {
			"title": "Where to Eat Lunch?",
			"dates": "Jun 2017",
			"description": "A random lunch place suggestion for Melbourne, Australia. Vue.js",
			"images": ["https://s3-us-west-2.amazonaws.com/i.cdpn.io/455455.oWQqvB.80561aea-6ac7-4a00-825f-974b7abb8dd6.png"]
		},
		{
			"title": "Linkubi's MMS/SMS CMS",
			"dates": "May 2016 - May 2017",
			"description": "Rebuilt a MMS/SMS content management system (CMS) that handles Melbourne Real Estate Agents' MMS/SMS Advisements which features:;br;> Drag & drop file upload;br;> Simple image manipulation;br;> Web data retrival system;br;> Reduced MMS creation time by 2-3X",
			"images": ["https://www.dropbox.com/s/zd4wmsxyz6vtwd4/linkubi_thumbnail1.jpg?raw=1",
            "https://www.dropbox.com/s/4d4fqehvmornwvr/linkubi_thumbnail2.jpg?raw=1",
            "https://www.dropbox.com/s/q4l6wcoy7pjpsgc/linkubi_thumbnail3.jpg?raw=1"]
		},
        {
			"title": "Great Journey Migration",
			"dates": "2015 - 2016",
			"description": "A simple website for a small Migration Agent Agency.;br;Built with:-;br;Frontend: Foundation & various JS libraries.;br;Backend: Laravel (PHP)",
			"images": ["https://www.dropbox.com/s/0c6o5v90u04eqdp/gjm_thumbnail.jpg?raw=1"]
		},
        {
			"title": "Pomodoro Clock",
			"dates": "Jan 2016",
			"description": "A Vue.js Pomodoro Clock.;br;Built with:-;br;Frontend: Foundation & Vue.js.;br;Backend: —",
			"images": ["https://www.dropbox.com/s/e506tv4519gja9r/pomo_clock_thumbnail.png?raw=1"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Swinburne",
			"location": "Kuching",
			"degree": "BEng",
			"majors": ["Robotics", "Electronics Design"],
			"dates": "",
			"url": "http://www.swinburne.edu.au/"
		},
		{
			"name": "Swinburne",
			"location": "Melbourne, Au",
			"degree": "Grad.Dip",
			"majors": ["Microelectronic"],
			"dates": "",
			"url": "http://www.swinburne.edu.au/"
		}
	],
	"onlineCourses": [
		{
			"title": "Mobile Web Development: Building Mobile Web Experiences",
			"school": "Udacity",
			"dates": "Jan 2014",
			"url": "https://www.udacity.com/course/mobile-web-development--cs256"
		},
		{
			"title": "Web Development: How to Build a Blog",
			"school": "Udacity",
			"dates": "Dec 2012",
			"url": "https://www.udacity.com/course/web-development--cs253"
		},
		{
			"title": "Intro to Computer Science: Building a Search Engine",
			"school": "Udacity",
			"dates": "Oct 2012",
			"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		}
	]
};

function inName(name) {
	name = name.trim().split(" ");
    size = name.length;
	name[size-1] = name[size-1].toUpperCase();
	name[0] = name[0][0] + name[0].slice(1).toLowerCase();
	
	return name.join(' ');
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts);
// $("#header").append(formattedContactGeneric);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

$('#main').append(internationalizeButton);


function displayWork() {
    console.log('displayWork()');
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var escapedDesc = job.description.replace(/;br;/g, '<br>');
        var formattedDesc = HTMLworkDescription.replace("%data%", escapedDesc);
        $(".work-entry:last").append(formattedDesc);
    });
}

project.display = function() {
    console.log('displayProject()');
    project.projects.forEach(function(elem) {
        console.log('appeding to #projects');
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", elem.title));
        $('.project-entry:last').append(HTMLprojectDates.replace("%data%", elem.dates));
        
        var escapedDesc = elem.description.replace(/;br;/g, '<br>');
        var formattedDesc = HTMLprojectDescription.replace("%data%", escapedDesc);
        $('.project-entry:last').append(formattedDesc);
        
        elem.images.forEach(function(e) {
            if (e) $('.project-entry:last').append(HTMLprojectImage.replace("%data%", e));
        });        
    });
}

displayWork();
project.display();

if ( bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	
	console.log("There's skills in bio.");
	bio.skills.forEach( function(elem) {
		$("#skills").append( HTMLskills.replace("%data%", elem) );
		console.log("element: " + elem);
	});
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$("#mapDiv").append(googleMap);
