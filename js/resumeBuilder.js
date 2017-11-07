/* bio section */
var bio = {
   "name": "Breno Rodrigues",
   "role": "Web Developer",
   "contacts": {
      "email": "abm.piracicaba@gmail.com",
      "mobile": "19998665544",
      "github": "github.com/BrenoSR",
      "location": "piracicaba, são paulo"
   },
   "bioPic": "images/fry.jpg",
   "welcomeMessage": "Welcome to my Portifolio Page",
   "skills": ["JS", "CSS", "HTML", "BD", "PHP"],
};

bio.display = function(){
   var name = HTMLheaderName.replace("%data%", bio.name);
   var role = HTMLheaderRole.replace("%data%", bio.role);

   $("#header").append(name + role);

   var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var email = HTMLemail.replace("%data%", bio.contacts.email);
   var github = HTMLgithub.replace("%data%", bio.contacts.github);

   $("#topContacts").append(mobile + email + github);

   var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
   var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

   $("#header").append(bioPic + welcomeMessage);

   $('#header').append(HTMLskillsStart);
   var formattedSkill = "";
   for(var skill in bio.skills){
      if(bio.skills.hasOwnProperty(skill)){
         formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
         $("#skills:last").append(formattedSkill);
      }
   }
};
bio.display();

/* work section */
var work = {
   "jobs": [{
         "employer": "LTS",
         "title": "programador",
         "location": "piracicaba",
         "dates": "2011",
         "description": "delhpi, sql,firebird"
      },
      {
         "employer": "Bragagnolo",
         "title": "officeboy",
         "location": "Sao pedro",
         "dates": "2010",
         "description": "arquivamento documentos"
      }
   ]

};

work.display = function(){
   for (var job in work.jobs) {
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
};
work.display();

/* projects section */
var projects = {
   "projects": [
      {
         "title": "site1",
         "dates": "2015",
         "description": "site de locação de imoveis",
         "images": ["images/site1.png"]
     },
     {
        "title": "site2",
        "dates": "2017",
        "description": "site de recibo proprietario",
        "images": ["images/site1.jpg"]
     }
]
};

projects.display = function(){
   for(var project in projects.projects){
      if(projects.projects.hasOwnProperty(project)){
         $('#projects').append(HTMLprojectStart);
         var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         var data = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         var description = HTMLprojectDescription.replace("%data%",  projects.projects[project].description);
         var image = HTMLprojectImage.replace("%data%",  projects.projects[project].images[0]);
         $('.project-entry:last').append(title+data+description+image);
      }
   }
};
projects.display();


/* education section */
var education = {
    "schools":[
      {
         "name": "Colegio Tecnico São Pedro",
         "location": "são pedro, são paulo",
         "degree": "tecnico",
         "majors": "Informatica",
         "dates": "2010"
      },
      {
         "name": "Universidade Metodista piracicaba",
         "location": "piracicaba, são paulo",
         "degree": "bacharel",
         "majors": "Tecnologia da Informacao",
         "dates": "2015"
      }
   ],
   "onlineCourses": [
      {
         "title": "Udacity Front-End",
         "school": "Udacity",
         "dates": "2017",
         "url": "udacity.com"
      }]
};

education.display = function(){
   for(var school in education.schools){
      if(education.schools.hasOwnProperty(school)){
         $('#education').append(HTMLschoolStart);
         var name = HTMLschoolName.replace("%data%", education.schools[school].name);
         var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
         var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
         var major = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
         var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
         $('.education-entry:last').append(name + degree + dates + location + major);
      }
   }
};
education.display();

$('#mapDiv').append(googleMap);
