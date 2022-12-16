var searchHistory = [];

function loadWeather() {
  $('.dashboard').attr("style", "display: block")
  $('#searchHistory').css({"border-top": "1.5px solid rgb(177, 177, 177)"});
  var city_name = $('input').val();
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=36d9d4b2c52c6270947d662bf627a20f&units=imperial`;
  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=36d9d4b2c52c6270947d662bf627a20f&units=imperial`;
  // AJAX call requires a third party library, jQuery
  $.ajax({
    url: currentUrl,
    method: 'GET',
  }).then(function (response) {
    $('#currentDate').text(response.name + " " + (dayjs().format('[(]M[/]D[/]YYYY[)]')) + " ");
    $('#currentTemp').text(response.main.temp);
    $("#currentWeather").attr("src","http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
    $("#currentWeather").attr("alt", response.weather[0].description);
    $('#currentWind').text(response.wind.speed);
    $('#currentHumidity').text(response.main.humidity);
    if (!searchHistory.includes(response.name)) {
      if (searchHistory.length < 10) {
        searchHistory.unshift(response.name);
        console.log(searchHistory);
      } else {
        searchHistory.unshift(response.name);
        searchHistory.splice(-1)
      }
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      $('#searchHistory').empty();
      for (var i = 0; i < searchHistory.length; i++) {
        $(`<button class="btn btn-secondary">${searchHistory[i]}</button>`).appendTo('#searchHistory');
      };
    };
    $('input').val("");
  });

  temperature = 0;
  wind = 0;
  humidity = 0;
  weather = [];
  forecastCycle = 0

  $.ajax({
    url: forecastUrl,
    method: 'GET',
  }).then(function (response) {
    for (var i = 0; i < 40; i++) {
      temperature = temperature + Number(response.list[i].main.temp);
      wind = wind + Number(response.list[i].wind.speed);
      humidity = humidity + Number(response.list[i].main.temp);
      // weather.push(response.list[i].weather[0].icon);
      if ((i+1) % 8 === 0  && i != 0) {
        var avgTemp = temperature / 8;
        var avgWind = wind / 8;
        var avgHumidity = humidity / 8;
        forecastCycle ++
        $('#date' + forecastCycle).text((dayjs().add(forecastCycle, 'day').format('[(]M[/]D[/]YYYY[)]')) + " ");
        $("#weather" + forecastCycle).attr("src","http://openweathermap.org/img/wn/" + response.list[i-3].weather[0].icon + "@2x.png");
        $('#temp' + forecastCycle).text(avgTemp.toFixed(2));
        $('#wind' + forecastCycle).text(avgWind.toFixed(2));
        $('#humidity' + forecastCycle).text(avgHumidity.toFixed(2));
        temperature = 0;
        wind = 0;
        humidity = 0;
      };
    };
  });
};

$('#searchHistory').on('click', 'button', function() {
  console.log("search");
  $('input').val($(this).text());
  loadWeather();
});


$('#searchCityBtn').on('click', loadWeather);
$('input').keypress(function(e) {
    if(e.which === 13){
		loadWeather();	
	}
})

function init() {
  $('.dashboard').attr("style", "display: none")
  var storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedHistory !== null) {
      searchHistory = storedHistory;
    };
  for (var i = 0; i < searchHistory.length; i++) {
    $(`<button class="btn btn-secondary">${searchHistory[i]}</button>`).appendTo('#searchHistory');
  };
};
  
init()