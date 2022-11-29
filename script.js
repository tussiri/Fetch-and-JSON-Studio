// // TODO: add code here

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astroData) {
            console.log(astroData[0].firstName);
            const container = document.getElementById('container')
            container.innerHTML += `<p> Total Numnber of Astronauts: ${astroData.length}</p>
            `;
            for (let astronaut in astroData) {
                astroData.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
                for (let i = 0; i < astroData.length; i++) {
                if (astroData[astronaut].active===true) {
                    activeColor = 'style="color:green"';
                }else{
                    activeColor = 'style="color:black"'
                }
            }
                
                container.innerHTML += `
                    <div class ="astronaut">
                        <div class="bio">
                            <h3>Name: ${astroData[astronaut].firstName} ${astroData[astronaut].lastName}</h3>
                                <ul id="astro">
                                    <li>Hours in Space: ${astroData[astronaut].hoursInSpace}</li>
                                    <li ${activeColor}>Active: ${astroData[astronaut].active}</li>
                                    <li>Skills: ${astroData[astronaut].skills.join(", ")}</li>
                                </ul>
                        </div>
                        <img class="avatar" src=${astroData[astronaut].picture}>
                    </div>`
            }

            // console.log(container.innerHTML)
            // console.log(typeof container.innerHTML)
        });
        // console.log('window loaded')
    });
})
