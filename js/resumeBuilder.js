var formattedName = "Andre Larangeira";
var formattedRole = "Web developer";

$("#header").append(HTMLheaderName.replace("%data%", formattedName) + HTMLheaderRole.replace("%data%", formattedRole));


var bio = {
   name: "Andre",
   role: "Web Developer",
   contacts: {
      email: "andre@gmail.com",
      mobile: "19983131932",
      github: "github.com/andremlarangeira"
   },
   pictureURL: "images/pic.jpg",
   WelcomeMessage: "Welcome to my Bio Page",
   skills: ["JS", "CSS", "HTML", "BD"],
};

var work = {
   "jobs": [{
         "employer": "LTS",
         "title": "programador",
         "location": "piracicaba",
         "dates": "04/07/2011",
         "description": "delhpi, sql,firebird"
      },
      {
         "employer": "Bragagnolo",
         "title": "officeboy",
         "location": "Sao pedro",
         "dates": "04/01/2010",
         "description": "arquivamento documentos"
      }
   ]

};

var projects = {
   "projects": [
      {
         "title": "site1",
         "dates": "01/2015",
         "description": "site de locação de imoveis",
         "images": ["images/site1.png"]
     },
     {
        "title": "site2",
        "dates": "03/2017",
        "description": "site de recibo proprietario",
        "images": ["images/site1.jpg"]
     }
]
}

projects.display = function(){
   for(project in projects.projects){
      if(projects.projects.hasOwnProperty(project)){
         $('#projects').append(HTMLprojectStart);
         console.log(projects.projects[project].title);
         var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         var data = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         var description = HTMLprojectDescription.replace("%data%",  projects.projects[project].description);
         var image = HTMLprojectImage.replace("%data%",  projects.projects[project].images[0]);
         $('.project-entry:last').append(title+data+description+image);
      }
   }
}
projects.display();

function displayWork() {
   for (job in work.jobs) {
      if (work.jobs.hasOwnProperty(job)) {
         $('#workExperience').append(HTMLworkStart);
         var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var data = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         // var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
         var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $('.work-entry:last').append(employer + title + data + description);
      }
   }
}

displayWork();

function inName(name) {
   var names = name.split(" ");
   var firstName = names[0].substr(0, 1).toUpperCase() + names[0].substr(1).toLowerCase();
   var lastName = names[1].toUpperCase();
   var newName = firstName + " " + lastName;
   console.log(newName);
   return newName;
}
// $('#main').append(internationalizeButton);
