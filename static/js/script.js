function chbg(img) {
  document.getElementById("thisTest").src = "./static/assets/img/"+img+".png";
}

function showContent(selector) {
  var toggleClass = 'card-body-content-active';
  var location = document.getElementById(selector);
  var hasClass = location.classList.contains(toggleClass);

  if ( !hasClass ) {
    document.getElementById("btn_"+selector).innerHTML = "Show less";
    location.classList.add(toggleClass);
  } 
  else {
    location.classList.remove(toggleClass);
    document.getElementById("btn_"+selector).innerHTML = "Show more";
  }
}

// load on demand??
window.onload = function () {
  populateProjects();
  populateEducation();
  populatePublications();
}

function populateEducation() {
  education.forEach(school => {
    
    let card = `
      <div class="col">
        <div class="flip-card mx-auto">
          <div class="flip-card-inner border">
            <div class="flip-card-front">
              <img class="card-img-bottom" src="static/assets/img/`+school.img+`" alt="...">
            </div>
            <div class="flip-card-back bg-white">
              <h1 class=" fs-3 border-bottom border-5 pb-2 bg-light">`+school.school+`</h1>
              <p>`+school.degree+`</p>
              <p>`+school.major+`</p>
              <p>`+school.from+` - `+school.to+`</p>
              <p>GPA - `+school.gpa+`</p>
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





var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget // Button that triggered the modal
  var id = button.getAttribute('data-id') // Extract info from data-bs-* attributes
  var project = projects[id];
  
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body')

  let lines = project.text.split("\n");
  var content = "";

  lines.forEach(line => {
    content += '<p>'
    content += line;
    content += '</p>'
  });

  modalTitle.textContent = project.title;
  modalBodyInput.innerHTML = content;
})