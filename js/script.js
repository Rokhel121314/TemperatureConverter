

function toFahrenheit() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 9/5;
    const c2 = 32;
    const c3 = x * c1 + c2; 
    const c4 = c3.toFixed(2);
    let fahrenheit = c4 + " °F";
    document.getElementById("convert").innerHTML = fahrenheit
}

function toKelvin() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 273.15;
    const c2 = parseFloat(x) + c1;
    const c3 = c2.toFixed(2);
    let kelvin = c3 + " °K";

    document.getElementById("convert").innerHTML = kelvin;
}

function toRankine() {
    let x = document.getElementById("degreeCelsius").value;
    const c1 = 491.67;
    const c2 = 9/5;
    let c3 = x * c2;
    let c4 = c3 + c1;
    let c5 = c4.toFixed(2);

    let rankine = c5 + " °R";

    document.getElementById("convert").innerHTML = rankine;
}

// CONVERTER 2

function fToCelsius() {
    let x = document.getElementById("degreeFahrenheit").value;
    const c1 = 5/9;
    const c2 = 32;

    let c3 = (x - c2) * c1;
    let c4 = c3.toFixed(2);
    let celsius = "=" + c4 + " °C";
    document.getElementById("convert2").innerHTML = celsius;
}

function kToCelsius() {
    let x = document.getElementById("degreeKelvin").value;
    const c1 = 273.15;
    let c2 = c1 - x;
    let c3 = c2.toFixed(2);
    let celsius = "=" + c3 + "°C";
    document.getElementById("convert3").innerHTML = celsius;
}

function rToCelsius() {
    let x = document.getElementById("degreeRankine").value;
    const c1 = 491.67;
    const c2 = 5/9;
    let c3 = x - c1;
    let c4 = c3 * c2;
    let c5 = c4.toFixed(2);
    
    let celsius = "=" + c5 + "°C";
    document.getElementById("convert4").innerHTML = celsius;
}

