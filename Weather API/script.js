document.getElementById('frm').addEventListener("click",(e)=>{
    e.preventDefault()

    
    let ds=document.getElementById("weather").value;
    weather(ds)
    
})

async function weather(ds)
    {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ds}&appid=8ec707d4b7b391cc2018e9425345f77a`)
        let d = await data.json()
        console.log(d);
        document.getElementById('box').innerHTML=`
        <br>
        <h2>${d.name}</h2><br>
        <h4 class="weather">${d.weather[0].main}</h4>
        <h4 class="desc">${d.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${d.weather[0].icon}.png">
        <h1>${d.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">MIN</h4>
                <h4 class="temp">${d.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">MAX</h4>
                <h4 class="temp">${d.main.temp_max}&#176;</h4>
            </div>
        </div> `;

      

    }