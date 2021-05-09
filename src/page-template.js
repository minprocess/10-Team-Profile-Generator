
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const fs = require('fs');

function genTeamPage(manager, engineers, interns) {

//<i class="fas fa-mug-hot"></i>

let jumbotron =
`
<div class="container-fluid">
<div class="row">
  <div class="col-12 jumbotron mb-3">
    <h1 class="text-center">My Team</h1>
  </div>
</div>
</div>
`

    let cards =
`
<div class="card">
  <div class="card-header">
    <h2 class="card-title">${manager.name}</h2>
    <h3 class="card-title">Manager</h3>
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
  /*
  `
  <div class="col-md-4">
    <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header text-white bg-primary ">
        <h4 class="card-title">${interns[i].name}</h4>
        <h5 class="card-title fas fa-mug-hot">Engineer</h5>
      </div>
      <div class="card-body bg-white text-black">
        <p class="card-text">ID: ${interns[i].id}</p>
        <p class="card-text">Email: ${interns[i].email}</p>
        <p class="card-text">GitHub: ${interns[i].school}</p>

      </div>
    </div>
  </div>
  `*/
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous">
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