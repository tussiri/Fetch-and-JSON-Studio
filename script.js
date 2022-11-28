// TODO: add code here

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json[0].firstName);
            let container = document.getElementById('container')
            for (var astronaut of json){
                console.log(astronaut.firstName)
            container.innerHTML += `
    <div class ="astronaut">
        <div class="bio">
            <h3>Name: ${astronaut.firstName}<h3>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ul>
        </div>
          <img class="avatar" src=${astronaut.picture}>
    </div>`
        }
        console.log(container.innerHTML)
        console.log(typeof container.innerHTML)
    });
    console.log('window loaded')
    });
})