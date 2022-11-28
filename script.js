// TODO: add code here

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            // console.log(json[0].firstName);
            let container = document.getElementById('container')
            for (let astronaut in json){
                // console.log(astronaut.firstName)
            container.innerHTML += `
    <div class ="astronaut">
        <div class="bio">
            <h3>Name: ${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                <ul>
                    <li>Hours in Space: ${json[astronaut].hoursInSpace}</li>
                    <li>Active: ${json[astronaut].active}</li>
                    <li>Skills: ${json[astronaut].skills}</li>
                </ul>
        </div>
          <img class="avatar" src=${json[astronaut].picture}>
    </div>`
        }
        // console.log(container.innerHTML)
        // console.log(typeof container.innerHTML)
    });
    // console.log('window loaded')
    });
})