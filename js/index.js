const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/32792?apikey=FP89HBoeDX543FA7EkSPwSMzoeN5WlMw'
const high = document.getElementById("high")
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
                console.log(data)
                forEach(function(data){
                    const {date, minimum, maximum} = data.daily.data
                    high.textContent = maximum;
                })
                
               
            })
        })
       
    }
}

)