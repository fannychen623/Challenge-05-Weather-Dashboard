// define major United State cities
var majorUsCities = ["ABERDEEN", "ABILENE", "AKRON", "ALBANY", "ALBUQUERQUE", "ALEXANDRIA", "ALLENTOWN", "AMARILLO", "ANAHEIM", "ANCHORAGE", 
"ANN ARBOR", "ANTIOCH", "APPLE VALLEY", "APPLETON", "ARLINGTON", "ARVADA", "ASHEVILLE", "ATHENS", "ATLANTA", "ATLANTIC CITY", "AUGUSTA", 
"AURORA", "AUSTIN", "BAKERSFIELD", "BALTIMORE", "BARNSTABLE", "BATON ROUGE", "BEAUMONT", "BEL AIR", "BELLEVUE", "BERKELEY", "BETHLEHEM", 
"BILLINGS", "BIRMINGHAM", "BLOOMINGTON", "BOISE", "BOISE CITY", "BONITA SPRINGS", "BOSTON", "BOULDER", "BRADENTON", "BREMERTON", "BRIDGEPORT", 
"BRIGHTON", "BROWNSVILLE", "BRYAN", "BUFFALO", "BURBANK", "BURLINGTON", "CAMBRIDGE", "CANTON", "CAPE CORAL", "CARROLLTON", "CARY", 
"CATHEDRAL CITY", "CEDAR RAPIDS", "CHAMPAIGN", "CHANDLER", "CHARLESTON", "CHARLOTTE", "CHATTANOOGA", "CHESAPEAKE", "CHICAGO", "CHULA VISTA", 
"CINCINNATI", "CLARKE COUNTY", "CLARKSVILLE", "CLEARWATER", "CLEVELAND", "COLLEGE STATION", "COLORADO SPRINGS", "COLUMBIA", "COLUMBUS", 
"CONCORD", "CORAL SPRINGS", "CORONA", "CORPUS CHRISTI", "COSTA MESA", "DALLAS", "DALY CITY", "DANBURY", "DAVENPORT", "DAVIDSON COUNTY", 
"DAYTON", "DAYTONA BEACH", "DELTONA", "DENTON", "DENVER", "DES MOINES", "DETROIT", "DOWNEY", "DULUTH", "DURHAM", "EL MONTE", "EL PASO", 
"ELIZABETH", "ELK GROVE", "ELKHART", "ERIE", "ESCONDIDO", "EUGENE", "EVANSVILLE", "FAIRFIELD", "FARGO", "FAYETTEVILLE", "FITCHBURG", "FLINT", 
"FONTANA", "FORT COLLINS", "FORT LAUDERDALE", "FORT SMITH", "FORT WALTON BEACH", "FORT WAYNE", "FORT WORTH", "FREDERICK", "FREMONT", "FRESNO", 
"FULLERTON", "GAINESVILLE", "GARDEN GROVE", "GARLAND", "GASTONIA", "GILBERT", "GLENDALE", "GRAND PRAIRIE", "GRAND RAPIDS", "GRAYSLAKE", 
"GREEN BAY", "GREENBAY", "GREENSBORO", "GREENVILLE", "GULFPORT-BILOXI", "HAGERSTOWN", "HAMPTON", "HARLINGEN", "HARRISBURG", "HARTFORD", 
"HAVRE DE GRACE", "HAYWARD", "HEMET", "HENDERSON", "HESPERIA", "HIALEAH", "HICKORY", "HIGH POINT", "HOLLYWOOD", "HONOLULU", "HOUMA", "HOUSTON", 
"HOWELL", "HUNTINGTON", "HUNTINGTON BEACH", "HUNTSVILLE", "INDEPENDENCE", "INDIANAPOLIS", "INGLEWOOD", "IRVINE", "IRVING", "JACKSON", "JACKSONVILLE", 
"JEFFERSON", "JERSEY CITY", "JOHNSON CITY", "JOLIET", "KAILUA", "KALAMAZOO", "KANEOHE", "KANSAS CITY", "KENNEWICK", "KENOSHA", "KILLEEN", "KISSIMMEE", 
"KNOXVILLE", "LACEY", "LAFAYETTE", "LAKE CHARLES", "LAKELAND", "LAKEWOOD", "LANCASTER", "LANSING", "LAREDO", "LAS CRUCES", "LAS VEGAS", "LAYTON", 
"LEOMINSTER", "LEWISVILLE", "LEXINGTON", "LINCOLN", "LITTLE ROCK", "LONG BEACH", "LORAIN", "LOS ANGELES", "LOUISVILLE", "LOWELL", "LUBBOCK", "MACON", 
"MADISON", "MANCHESTER", "MARINA", "MARYSVILLE", "MCALLEN", "MCHENRY", "MEDFORD", "MELBOURNE", "MEMPHIS", "MERCED", "MESA", "MESQUITE", "MIAMI", 
"MILWAUKEE", "MINNEAPOLIS", "MIRAMAR", "MISSION VIEJO", "MOBILE", "MODESTO", "MONROE", "MONTEREY", "MONTGOMERY", "MORENO VALLEY", "MURFREESBORO", 
"MURRIETA", "MUSKEGON", "MYRTLE BEACH", "NAPERVILLE", "NAPLES", "NASHUA", "NASHVILLE", "NEW BEDFORD", "NEW HAVEN", "NEW LONDON", "NEW ORLEANS", 
"NEW YORK", "NEW YORK CITY", "NEWARK", "NEWBURGH", "NEWPORT NEWS", "NORFOLK", "NORMAL", "NORMAN", "NORTH CHARLESTON", "NORTH LAS VEGAS", "NORTH PORT", 
"NORWALK", "NORWICH", "OAKLAND", "OCALA", "OCEANSIDE", "ODESSA", "OGDEN", "OKLAHOMA CITY", "OLATHE", "OLYMPIA", "OMAHA", "ONTARIO", "ORANGE", "OREM", 
"ORLANDO", "OVERLAND PARK", "OXNARD", "PALM BAY", "PALM SPRINGS", "PALMDALE", "PANAMA CITY", "PASADENA", "PATERSON", "PEMBROKE PINES", "PENSACOLA", 
"PEORIA", "PHILADELPHIA", "PHOENIX", "PITTSBURGH", "PLANO", "POMONA", "POMPANO BEACH", "PORT ARTHUR", "PORT ORANGE", "PORT SAINT LUCIE", 
"PORT ST. LUCIE", "PORTLAND", "PORTSMOUTH", "POUGHKEEPSIE", "PROVIDENCE", "PROVO", "PUEBLO", "PUNTA GORDA", "RACINE", "RALEIGH", "RANCHO CUCAMONGA", 
"READING", "REDDING", "RENO", "RICHLAND", "RICHMOND", "RICHMOND COUNTY", "RIVERSIDE", "ROANOKE", "ROCHESTER", "ROCKFORD", "ROSEVILLE", 
"ROUND LAKE BEACH", "SACRAMENTO", "SAGINAW", "SAINT LOUIS", "SAINT PAUL", "SAINT PETERSBURG", "SALEM", "SALINAS", "SALT LAKE CITY", "SAN ANTONIO", 
"SAN BERNARDINO", "SAN BUENAVENTURA", "SAN DIEGO", "SAN FRANCISCO", "SAN JOSE", "SANTA ANA", "SANTA BARBARA", "SANTA CLARA", "SANTA CLARITA", 
"SANTA CRUZ", "SANTA MARIA", "SANTA ROSA", "SARASOTA", "SAVANNAH", "SCOTTSDALE", "SCRANTON", "SEASIDE", "SEATTLE", "SEBASTIAN", "SHREVEPORT", 
"SIMI VALLEY", "SIOUX CITY", "SIOUX FALLS", "SOUTH BEND", "SOUTH LYON", "SPARTANBURG", "SPOKANE", "SPRINGDALE", "SPRINGFIELD", "ST. LOUIS", 
"ST. PAUL", "ST. PETERSBURG", "STAMFORD", "STERLING HEIGHTS", "STOCKTON", "SUNNYVALE", "SYRACUSE", "TACOMA", "TALLAHASSEE", "TAMPA", "TEMECULA", 
"TEMPE", "THORNTON", "THOUSAND OAKS", "TOLEDO", "TOPEKA", "TORRANCE", "TRENTON", "TUCSON", "TULSA", "TUSCALOOSA", "TYLER", "UTICA", "VALLEJO", 
"VANCOUVER", "VERO BEACH", "VICTORVILLE", "VIRGINIA BEACH", "VISALIA", "WACO", "WARREN", "WASHINGTON", "WATERBURY", "WATERLOO", "WEST COVINA", 
"WEST VALLEY CITY", "WESTMINSTER", "WICHITA", "WILMINGTON", "WINSTON", "WINTER HAVEN", "WORCESTER", "YAKIMA", "YONKERS", "YORK", "YOUNGSTOWN"];

// define empty array to store seach history and city name value
var searchHistory = [];
var city_name = "";

// load the weather dashboard
function loadWeather() {
  // check that the input value is a major u.s. city
  if (majorUsCities.includes(city_name)) {
    // show the weather dashboard
    $('.dashboard').attr("style", "display: block")
    $('#searchHistory').css({"border-top": "1.5px solid rgb(177, 177, 177)"});
    // define the api's used to retrieve weather data
    var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=36d9d4b2c52c6270947d662bf627a20f&units=imperial`;
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=36d9d4b2c52c6270947d662bf627a20f&units=imperial`;
    // jQuery call to fetch api response
    // code to load the current weather and search history sections
    $.ajax({
      url: currentUrl,
      method: 'GET',
    }).then(function (response) {
      // use day.js library to populate today's date
      // use weather api to populate city name and weather information
      $('#currentDate').text(response.name + " " + (dayjs().format('[(]M[/]D[/]YYYY[)]')) + " ");
      $('#currentTemp').text(response.main.temp);
      // populate the weather icon based on the response parameter
      $("#currentWeather").attr("src","http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
      $("#currentWeather").attr("alt", response.weather[0].description);
      $('#currentWind').text(response.wind.speed);
      $('#currentHumidity').text(response.main.humidity);
      // do not duplicate the same city twice in the search history
      if (!searchHistory.includes(response.name)) {
        // collect a max of 10 searched cities
        // push the new city to the front of the array
        if (searchHistory.length < 10) {
          searchHistory.unshift(response.name);
        } else {
          // push the new city to the front of the array and remove the last array value
          searchHistory.unshift(response.name);
          searchHistory.splice(-1)
        }
        // set the new search history array to the local storage
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        // empty the search history section and repopulate with buttons of updated array values
        $('#searchHistory').empty();
        for (var i = 0; i < searchHistory.length; i++) {
          $(`<button class="btn btn-secondary">${searchHistory[i]}</button>`).appendTo('#searchHistory');
        };
      };
      // clear the input field
      $('input').val("");
    });

    // code to load the 5-day weather forecast
    // define weather value to be averaged each day
    temperature = 0;
    wind = 0;
    humidity = 0;
    // define the forecasted day
    forecastCycle = 0

    // get response of 5-day forecast
    $.ajax({
      url: forecastUrl,
      method: 'GET',
    }).then(function (response) {
      // loop through all the weather data
      for (var i = 0; i < 40; i++) {
        // add temperature, wind, and humidity values
        temperature = temperature + Number(response.list[i].main.temp);
        wind = wind + Number(response.list[i].wind.speed);
        humidity = humidity + Number(response.list[i].main.temp);
        // response outputs 8 time-stamps of weather values for each day
        // after 8 indicies, average the weather values for the day
        if ((i+1) % 8 === 0  && i != 0) {
          // average the weather values for the day
          var avgTemp = temperature / 8;
          var avgWind = wind / 8;
          var avgHumidity = humidity / 8;
          // increase the forecast cycle to define the html element to populate
          forecastCycle ++
          // populate respective regions with the date and average weather value
          $('#date' + forecastCycle).text((dayjs().add(forecastCycle, 'day').format('[(]M[/]D[/]YYYY[)]')) + " ");
          // populate the eather icon with the mid-day weather data
          $("#weather" + forecastCycle).attr("src","http://openweathermap.org/img/wn/" + response.list[i-3].weather[0].icon + "@2x.png");
          // populate weather data to 2 decimal places
          $('#temp' + forecastCycle).text(avgTemp.toFixed(2));
          $('#wind' + forecastCycle).text(avgWind.toFixed(2));
          $('#humidity' + forecastCycle).text(avgHumidity.toFixed(2));
          // reset weather data for the next forecast day
          temperature = 0;
          wind = 0;
          humidity = 0;
        };
      };
    });
    // if the city is not a major city output an error alert
  } else {
    $('input').val("");
    alert("Error: " + city_name + " is not a major U.S. city.");
  }
};

// function to define city name and run loadWeather function on click
$('#searchCityBtn').on('click', function() {
  if ($('input').val() !== "") {
    city_name = $('input').val().toUpperCase();
    loadWeather();
  };
});

// function to define city name and run loadWeather function if the 'enter' key was pressed
$('input').keypress(function(e) {
  if(e.which === 13 && $('input').val() !== ""){
    city_name = $('input').val().toUpperCase();
    loadWeather();	
	}
})

// function to define city name and run loadWeather function on click
$('#searchHistory').on('click', 'button', function() {
  city_name = $(this).text().toUpperCase();
  loadWeather();
});

// function to run when the page initializes
function init() {
  // hide the weather dashboard
  $('.dashboard').attr("style", "display: none")
  // get search history from local storage
  var storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedHistory !== null) {
      searchHistory = storedHistory;
    };
  // loop through the search history to populate the search history section with buttons
  for (var i = 0; i < searchHistory.length; i++) {
    $('#searchHistory').css({"border-top": "1.5px solid rgb(177, 177, 177)"});
    $(`<button class="btn btn-secondary">${searchHistory[i]}</button>`).appendTo('#searchHistory');
  };
};

init();