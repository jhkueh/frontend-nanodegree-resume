var bio = {
	"name": "Jiing H. Kueh",
	"role": "Freelance Web Developer",
	"contacts": {
		"mobile": "-",
		"email": "jhkueh@gmail.com",
		"github": "jhkueh",
		"location": "Melbourne, Au"
	},
	"welcomeMessage": "When something is important enough, you do it even if the ods are not in your favor. --Elon Musk",
	"skills": ["PHP/Laravel", 
						"Javascript: Vue.js, AngularJS, jQuery",
						"CSS: Bootstrap, Foundation, Bulma",
						"Misc: Git, Laradock, Laravel Homestead"],
    "bioPic": "images/profile.jpg",
    display: function() {
        console.log('bio.display()');
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", this.bioPic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        
        if ( this.skills.length > 0 ) {
            $("#header").append(HTMLskillsStart);
            
            console.log("There's skills in bio.");
            this.skills.forEach( function(skill) {
                $("#skills").append( HTMLskills.replace("%data%", skill) );
                console.log("element: " + skill);
            });
        }

        $('#main').append(internationalizeButton);
    }
};

var education = {
	"schools": [
        {
			"name": "Swinburne",
			"location": "Melbourne, Victoria, Australia",
			"degree": "Grad.Dip",
			"majors": ["Microelectronic"],
			"dates": "2009 - Jun 2010",
			"url": "http://www.swinburne.edu.au/"
		},
		{
			"name": "Swinburne",
			"location": "Kuching, Sarawak, Malaysia",
			"degree": "BEng",
			"majors": ["Robotics", "Electronics Design"],
			"dates": "2005 - 2008",
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
	],
    display: function() {
        console.log('education.display()');
        
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName
                                                        .replace("%data%", school.name)
                                                        .replace("%url%", school.url)
                                                        + HTMLschoolDegree.replace("%data%", school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace("%data%", school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", school.location));
            
            school.majors.forEach(function(e) {
                if (e) $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", e));
            });
        });
        
        $('#education').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $('#education').append(HTMLonlineStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            $('.oCourse-entry:last').append(formattedTitle.replace("%url%", course.url) + HTMLonlineSchool.replace("%data%", course.school));
            $('.oCourse-entry:last').append(HTMLonlineDates.replace("%data%", course.dates));
        });
    }
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
	],
    display: function() {
        console.log('work.display()');
        this.jobs.forEach(function(job) {
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
};

var project = {
	"projects": [
        {
			"title": "Where to Eat Lunch?",
			"dates": "Jun 2017",
			"description": "A random lunch place suggestion for Melbourne, Australia. Vue.js",
            "url": "https://codepen.io/jhkueh/debug/oWQqvB",
			"images": ["https://s3-us-west-2.amazonaws.com/i.cdpn.io/455455.oWQqvB.80561aea-6ac7-4a00-825f-974b7abb8dd6.png"]
		},
		{
			"title": "Linkubi's MMS/SMS CMS",
			"dates": "May 2016 - May 2017",
			"description": "Rebuilt a MMS/SMS content management system (CMS) that handles Melbourne Real Estate Agents' MMS/SMS Advisements which features:;br;> Drag & drop file upload;br;> Simple image manipulation;br;> Web data retrival system;br;> Reduced MMS creation time by 2-3X",
            "url": "http://new.linkubi.com.au/login",
			"images": ["https://www.dropbox.com/s/zd4wmsxyz6vtwd4/linkubi_thumbnail1.jpg?raw=1",
            "https://www.dropbox.com/s/4d4fqehvmornwvr/linkubi_thumbnail2.jpg?raw=1",
            "https://www.dropbox.com/s/q4l6wcoy7pjpsgc/linkubi_thumbnail3.jpg?raw=1"]
		},
        {
			"title": "Great Journey Migration",
			"dates": "2015 - 2016",
			"description": "A simple website for a small Migration Agent Agency.;br;Built with:-;br;Frontend: Foundation & various JS libraries.;br;Backend: Laravel (PHP)",
            "url": "https://www.greatjourneymigration.com.au/",
			"images": ["https://www.dropbox.com/s/0c6o5v90u04eqdp/gjm_thumbnail.jpg?raw=1"]
		},
        {
			"title": "Pomodoro Clock",
			"dates": "Jan 2016",
			"description": "A Vue.js Pomodoro Clock.;br;Built with:-;br;Frontend: Foundation & Vue.js.;br;Backend: —",
            "url": "https://codepen.io/jhkueh/debug/mVwJaE",
			"images": ["https://www.dropbox.com/s/e506tv4519gja9r/pomo_clock_thumbnail.png?raw=1"]
		}
	],
    display: function() {
        console.log('project.display()');
        this.projects.forEach(function(elem) {
            console.log('appeding to #projects');
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle
                                                        .replace("%data%", elem.title)
                                                        .replace("%url%", elem.url));
            $('.project-entry:last').append(HTMLprojectDates.replace("%data%", elem.dates));
            
            var escapedDesc = elem.description.replace(/;br;/g, '<br>');
            var formattedDesc = HTMLprojectDescription.replace("%data%", escapedDesc);
            $('.project-entry:last').append(formattedDesc);
            
            elem.images.forEach(function(e) {
                if (e) $('.project-entry:last').append(HTMLprojectImageURL
                                                                    .replace("%url%", e)
                                                                    .replace("%data%", HTMLprojectImage.replace("%data%", e)));
            });
        });
    }
};

function inName(name) {
	name = name.trim().split(" ");
    size = name.length;
	name[size-1] = name[size-1].toUpperCase();
	name[0] = name[0][0] + name[0].slice(1).toLowerCase();
	
	return name.join(' ');
}

bio.display();
education.display();
work.display();
project.display();

$("#mapDiv").append(googleMap);
