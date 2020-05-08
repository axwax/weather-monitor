let hum = ""
let temp = ""
weatherbit.startWeatherMonitoring()
basic.forever(function () {
    temp = convertToText(Math.round(weatherbit.temperature() / 100))
    basic.showString("Temp: " + temp + "C")
    basic.pause(1000)
    hum = convertToText(Math.round(weatherbit.humidity() / 1024))
    basic.showString("Hum: " + hum + "%")
})
