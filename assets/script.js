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

var searchHistory = [];
var city_name = "";

function loadWeather() {
  if (majorUsCities.includes(city_name)) {
    $('.dashboard').attr("style", "display: block")
    $('#searchHistory').css({"border-top": "1.5px solid rgb(177, 177, 177)"});
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
  } else {
    $('input').val("");
    alert("Error: " + city_name + " is not a major U.S. city.");
  }
};

$('#searchHistory').on('click', 'button', function() {
  city_name = $(this).text().toUpperCase();
  loadWeather();
});


$('#searchCityBtn').on('click', function() {
  if ($('input').val() !== "") {
    city_name = $('input').val().toUpperCase();
    loadWeather();
  };
});

$('input').keypress(function(e) {
  if(e.which === 13 && $('input').val() !== ""){
    city_name = $('input').val().toUpperCase();
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
    $('#searchHistory').css({"border-top": "1.5px solid rgb(177, 177, 177)"});
    $(`<button class="btn btn-secondary">${searchHistory[i]}</button>`).appendTo('#searchHistory');
  };
};

init();