// TODO: add code here

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            // console.log(json[0].firstName);
            const container = document.getElementById('container')
            container.innerHTML += `<p> Total Numnber of Astronauts: ${json.length}</p>
            `;
            for (let astronaut in json) {
                for (let i = 0; i < json.length; i++) {
                if (json[astronaut].active) {
                    activeColor = 'style="color:green"';
                }else{
                    activeColor = 'style="color:red"'
                }
            }
                json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
                container.innerHTML += `
                    <div class ="astronaut">
                        <div class="bio">
                            <h3>Name: ${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                                <ul id="astro">
                                    <li>Hours in Space: ${json[astronaut].hoursInSpace}</li>
                                    <li ${activeColor}>Active: ${json[astronaut].active}</li>
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