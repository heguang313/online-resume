# Project Details
the Online Resume link: https://heguang313.github.io/online-resume/

In this project I create my interactive online resume. The resume data is stored in four JavaScript objects. All of the HTML code needed to build the resume is stored in js/helper.js variables.

The resume has four distinct sections: work, education, projects and a header with my bio. It also has an interactive Google Map with pins of location where I lived and worked -- all over the world, as a matter of fact

My repository includes the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: My code are here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

### My process:
The resume has four distinct sections: work, education, projects and a header with biographical information.
  * `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters
