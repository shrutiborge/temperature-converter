function tempConverterF() {
  const fhInput = document.getElementById("fh").innerHTML = document.querySelector("input").value;
  const celsius = document.getElementById("outputCelcius").innerHTML=(fhInput - 32)/1.8;
  const kelvin = document.getElementById("outputKelvin").innerHTML=((fhInput - 32)/1.8) + 273.15;
  console.log("Farenheit: " + fhInput);
  console.log("Farenheit to Celcius: " + celsius);
  console.log("Farenheit to Kelvin: " + kelvin);
}
const button = document.querySelector('button');
button.addEventListener('click', tempConverterF);

function tempConverterC() {
  const celsius2 = document.getElementById("cel").innerHTML = document.querySelector(".result2").value;
  const farenheit2 = document.getElementById("outputFarenheit").innerHTML=(celsius2 * 1.8) + 32;
  const kelvin2 = document.getElementById("outputKelvin2").innerHTML= celsius2 + 273.15;
  console.log("Celcius: " + celsius2);
  console.log("Celsius to Farenheit: " + farenheit2);
  console.log("Celsius to Kelvin: " + kelvin2);
}

const button2 = document.querySelector(".celsiusButton");
button2.addEventListener('click', tempConverterC);


function tempConverterK() {
  const kelvin3 = document.getElementById("kel").innerHTML = document.querySelector(".result3").value;
  const farenheit3 = document.getElementById("outputFaren").innerHTML=((kelvin3 - 273.18) * 1.8) + 32;
  const celsius3 = document.getElementById("outputKel").innerHTML= kelvin3 - 273.15;
  console.log("kelvin: " + kelvin3);
  console.log("kelvin to Farenheit: " + farenheit3);
  console.log("kelvin to Celsius: " + celsius3);
}

const button3 = document.querySelector(".kelvinButton");
button3.addEventListener('click', tempConverterK);
