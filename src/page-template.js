
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');

function genTeamPage(manager, engineers, interns) {

//<i class="fas fa-mug-hot"></i>

let jumbotron = 
`
<div class="p-4 mb-4 rounded-3" style="background-color:pink">
  <div class="container-fluid py-4">
    <h1 class="display-4 fw-bold text-center">My Team</h1>
  </div>
</div>
`

    let cards =
`
<div class="card">
  <div class="card-header">
    <h2 class="card-title">${manager.name}</h2>
    <i class="fas fa-mug-hot"></i><h3 class="card-title" style="display:inline-block;">Manager</h3>
  </div>

  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">
        Email:
        <a href="mailto:${manager.email}">${manager.email}</a>
      </li>
      <li class="list-group-item">Office number: ${manager.officenumber}</li>
    </ul>
  </div>
</div>
`

for (i=0; i<engineers.length; i++) {
cards += 
`
<div class="card">
  <div class="card-header">
    <h2 class="card-title">${engineers[i].name}</h2>
    <h3 class="card-title">Engineer</h3>
  </div>

  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineers[i].id}</li>
      <li class="list-group-item">
        Email:
        <a href="mailto:${engineers[i].email}">${engineers[i].email}</a>
      </li>
      <li class="list-group-item">GitHub: ${engineers[i].github}</li>
    </ul>
  </div>
</div>
`

}

for (i=0; i<interns.length; i++) {
  cards += 
  `
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">${interns[i].name}</h2>
      <h3 class="card-title">Intern</h3>
    </div>
    
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${interns[i].id}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${interns[i].email}">${interns[i].email}</a>
        </li>
        <li class="list-group-item">School: ${interns[i].school}</li>
      </ul>
    </div>
  </div>
  `

  }
  

    var data = 
`
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <title>Dev Team!</title>
  </head>
  <body>
  `
  + jumbotron +

  `
  <div class="container">
  <div class="row">
    <div class="col-12 d-flex justify-content-center">
`
+ cards +

`
</div>
</div>
</div>
    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  </body>
</html>
`

fs.writeFileSync("./dist/team.html", data);
}
module.exports = genTeamPage;