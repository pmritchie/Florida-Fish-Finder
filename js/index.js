const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/32792?apikey=FP89HBoeDX543FA7EkSPwSMzoeN5WlMw'
const weatherLoc = document.getElementById("weather-list")
window.addEventListener("load", () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const url = `${proxy}https://api.darksky.net/forecast/77de2d1b0cca79a6d14c15792936d2d8/${lat},${long}`
            fetch(url).then(data => {
                return data.json()
            })
            .then(data => {
                console.log(data.daily.data[0])
                let jsnLoc = data.daily.data
                let newItem = ''
                for(var i = 0; i < 3; i++){
                    newItem += '<li class="weather-item container m-1">'
                    let highRound = Math.round(jsnLoc[i].temperatureHigh)
                    let lowRound = Math.round(jsnLoc[i].temperatureLow)
                    let utcSec = `${jsnLoc[i].time}`
                    let d = new Date(0)
                    d.setUTCSeconds(utcSec)
                    newItem += `<p id="one${[i]}" class="row m-0">${d}</p>`
                    newItem += `<div class="row">`
                    newItem += `<p class="col-10 m-1">High: ${highRound}</p>`
                    newItem += `<p class="col-10 m-1">Low: ${lowRound}</p>`
                    newItem += `</div>`
                  
                     //console.log(test.toLocaleString())
                    
                    //test.slice(0, 4)
                    

                    newItem += `<p>${jsnLoc[i].summary}</p>`
                    newItem += '</li>'
                }
                

                weatherLoc.insertAdjacentHTML('afterbegin', newItem)
                let one = document.getElementById("one0").textContent
                let oneS = one.slice(0, 4)
                document.getElementById("one0").textContent = oneS

                let two = document.getElementById("one1").textContent
                let twoS = two.slice(0, 4)
                document.getElementById("one1").textContent = twoS

                let three = document.getElementById("one2").textContent
                let threeS = three.slice(0, 4)
                document.getElementById("one2").textContent = threeS
                
               
            })
        })
       
    }
}

)