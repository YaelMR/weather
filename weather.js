$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Current weather: " + data.currently.summary + "<br>Temperature: " + data.currently.temperature + "<br>Apparent Temperature: " + data.currently.apparentTemperature + "<br><br>Daily Forecast:<br>Today: " + data.daily.data[0].summary + "<br>Temperature: " + data.daily.data[0].temperatureMin + "-" + data.daily.data[0].temperatureMax + "<br>Apparent Temperature: " + data.daily.data[0].apparentTemperatureMin + "-" + data.daily.data[0].apparentTemperatureMax + "<br><br>Tomorrow: " + data.daily.data[1].summary + "<br>Temperature: " + data.daily.data[1].temperatureMin + "-" + data.daily.data[1].temperatureMax + "<br>Apparent Temperature: " + data.daily.data[1].apparentTemperatureMin + "-" + data.daily.data[1].apparentTemperatureMax + "<br><br>In 2-Days: " + data.daily.data[2].summary + "<br>Temperature: " + data.daily.data[2].temperatureMin + "-" + data.daily.data[2].temperatureMax + "<br>Apparent Temperature: " + data.daily.data[2].apparentTemperatureMin + "-" + data.daily.data[2].apparentTemperatureMax + "<br><br>In 3-Days :" + data.daily.data[3].summary + "<br>Temperature: " + data.daily.data[3].temperatureMin + "-" + data.daily.data[3].temperatureMax + "<br>Apparent Temperature: " + data.daily.data[3].apparentTemperatureMin + "-" + data.daily.data[3].apparentTemperatureMax;
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});