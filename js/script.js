

function toFahrenheit() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 9/5;
    const c2 = 32;

    let fahrenheit = x*c1 + c2 + " °F";
    document.getElementById("convert").innerHTML = fahrenheit
}

function toKelvin() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 273.15;
    
    let kelvin = parseFloat(x) + c1 + " °K";

    document.getElementById("convert").innerHTML = kelvin;
}

function toRankine() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 491.67;
    
    let rankine = c1 + " °R";

    document.getElementById("convert").innerHTML = rankine;
}

// CONVERTER 2

function fToCelsius() {
    let x = document.getElementById("degreeFahrenheit").value;
    const c1 = 5/9;
    const c2 = 32;

    let c3 = (x - c2) * c1;
    let c4 = c3.toFixed(2);
    let celsius = c4 + " °C";
    document.getElementById("convert2").innerHTML = celsius;
}

function kToCelsius() {
    let x = document.getElementById("degreeKelvin").value;
    const c1 = 273.15;
    let c2 = c1 - x;
    let c3 = c2.toFixed(2);
    let celsius = c3 + "°C";
    document.getElementById("convert3").innerHTML = celsius;
}

function rToCelsius() {
    let x = document.getElementById("degreeRankine").value;
    const c1 = 491.67;
    let c2 = c1 - x;
    let c3 = c2.toFixed(2);
    
    let celsius = c3 + "°C";
    document.getElementById("convert4").innerHTML = celsius;
}

