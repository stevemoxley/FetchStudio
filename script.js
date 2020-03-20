window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){

        let jsonPromise = response.json();

        jsonPromise.then(function(jsonResponse){

            jsonResponse=jsonResponse.sort(function(a,b){
                return a.hoursInSpace- b.hoursInSpace;
            });

            let container = document.getElementById("container");
            let count = 0;

            for(astronaut of jsonResponse){

                        let astronautHtml = 
                `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li class = "${astronaut.active ? "active" : "inactive"}" >Active: ${ astronaut.active }</li>
                            <li>Skills: ${ astronaut.skills.join(", ") } </li>
                        </ul>
                    </div>
                    <img class="avatar" src="${ astronaut.picture  }">
                    </div>
                `
                count++;
                container.innerHTML += astronautHtml;

            }

            let countContainer = document.getElementById("count");
            countContainer.innerHTML = count;


        })
    });


});