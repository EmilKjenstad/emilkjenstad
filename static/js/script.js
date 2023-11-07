window.onscroll = function() {navCheck()} ;

function navCheck() {
  const nav = document.querySelector("#scrollspy-nav");
  var h = nav.offsetHeight;

  var top = document.querySelector('#sectionLanding').offsetHeight;
  var bord = parseInt(getComputedStyle(document.querySelector('section')).borderTopWidth);

  // used to be top-h
  if(window.scrollY < 10) {
    // BG Color
    nav.classList.add("bg-transparent")
    nav.classList.remove("bg-primary")

    //TEXT color
    nav.classList.add("navbar-light")
    nav.classList.remove("navbar-dark")
  }
  else {
    // BG Color
    nav.classList.add("bg-primary")
    nav.classList.remove("bg-transparent")

    //TEXT color
    nav.classList.add("navbar-dark")
    nav.classList.remove("navbar-light")
  }
}

// load on demand??
window.onload = function () {
  navCheck()
    populateProjects();
    populateEducation();
    populatePublications();
    populateExperience();
}

function populateEducation() {
  education.forEach(school => {
    
    let card = `
      <div class="col">
        <div class="flip-card mx-auto">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="static/assets/img/`+school.img+`" alt="...">
            </div>
            <div class="flip-card-back bg-white">
              <h1 class=" fs-3 border-bottom border-5 pb-2 bg-light">`+school.school+`</h1>
              <h5>`+school.degree+`</h5>
              <p class="text-muted">`+school.major+`</p>
              <hr class="w-50 mx-auto">
              <p class="mb-0">`+school.from+` - `+school.to+`</p>
              <p class="">GPA - `+school.gpa+`</p>
            </div>
          </div>
        </div>
      </div>
    `

    document.querySelector("#education_content").innerHTML += card;
  });

}

function populateProjects() {
  
  for (var i = 0; i < projects.length; i++) {
    let lines = projects[i].text.split("\n");
    let desc = "";

    lines.forEach(line => {
      if (line != "") {
        desc += '<p class="card-text">'
        desc += line;
        desc += '</p>'
      }
    });

    let project = `
    <div class="col">
      <div class="card">
        <img src="static/assets/img/`+ projects[i].img +`" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">`+ projects[i].title +`</h5>
          <p class="text-muted">`+ projects[i].from +` - `+ projects[i].to +`</p>
          <div id="project_content`+i+`" class="card-body-content">`+desc+`</div>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+i+`">See more</button>
        </div>
      </div>
    </div>
    `
    
    document.querySelector("#content_projects"). innerHTML += project;
  }
}

function populatePublications() {
  
  for (var i=0; i<publications.length; i++) {
    let lines = publications[i].abstract.split("\n");
    let desc = "";
    
    lines.forEach(line => {
      if (line != "") {
        desc += '<p>'
        desc += line;
        desc += '</p>'
      }
    });
    
    //collapse show != collapsed
    let item = `
    <div class="accordion-item">
      <h2 class="accordion-header" id="publication`+i+`">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+i+`" aria-expanded="false" aria-controls="collapse`+i+`">
          <strong>`+publications[i].title+`</strong>
        </button>
      </h2>
      <div id="collapse`+i+`" class="accordion-collapse collapse" aria-labelledby="publication`+i+`" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        `+desc+`
        <a href="`+publications[i].link+`" target="blank" type="button" class="btn btn-outline-secondary">View Publication</a>
        </div>
      </div>
    </div>
    `
    document.querySelector("#accordionExample").innerHTML += item;
  }

}

function populateExperience() {
  var left = true;

  experiences.forEach(exp => {
    var side = left ? "left" : "right";

    let entry = `
      <div class="timeline_event `+ side +`">
        <div class="content shadow-lg">
          <h2>`+exp.title+`</h2>
          <h5 class="text-muted">`+exp.location+`
            <small>(`+exp.time+`)</small>
          </h5>
        </div>
      </div>
    `

    left = !left;

    document.querySelector("#timeline_content").innerHTML += entry;
  });
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget // Button that triggered the modal
  var id = button.getAttribute('data-id') // Extract info from data-bs-* attributes
  var project = projects[id];
  
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('#exampleModalLabel')
  var modalBodyInput = exampleModal.querySelector('#modal_content')
  var modalImage = exampleModal.querySelector('#model_image')

  let lines = project.text.split("\n");
  var content = "";

  lines.forEach(line => {
    content += '<p>'
    content += line;
    content += '</p>'
  });
  var title = "";
  title += '<h5 class="modal-title">'+project.title+'</h5>';
  title += '<small class="text-muted">'+project.from+' - '+project.to+'</small>';
  //modalImage.src = "static/assets/img/"+project.img;
  modalTitle.innerHTML = title;
  modalBodyInput.innerHTML = content;
})