const calculatetemp = () => {
    const inputtemp = document.getElementById('temp').value;
    const tempselected = document.getElementById('temp_diff')
    const valuetemp = tempselected.options[tempselected.selectedIndex].value
    const celtofah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }

    const fahtocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }

    const celtokel = (kel) => {
        let kels = 273.15 + Number.parseInt(kel);
        return kels;
    }

    const fahtokel = (kel) => {
        let kels = ((kel - 32) * 5 / 9 + 273.15).toFixed(2)
        return kels;
    }

    const keltocel = (cel) => {
        let cels = (cel - 273.15).toFixed(2);
        return cels;
    }
    const keltofah = (cel) => {
        let cels = ((cel - 273.15) * 9 / 5 + 32).toFixed(2);
        return cels;
    }

    if (valuetemp == 'cel') {
        document.getElementById("result1").innerHTML = celtofah(inputtemp) + "&#176; Fahrenheit"
        document.getElementById("result2").innerHTML = celtokel(inputtemp) + "&#176; Kelvin"
    }
    else if (valuetemp == 'far') {
        document.getElementById("result1").innerHTML = fahtocel(inputtemp) + "&#176; Celsius"
        document.getElementById("result2").innerHTML = fahtokel(inputtemp) + "&#176; Kelvin"
    }
    else {
        document.getElementById('result1').innerHTML = keltocel(inputtemp) + "&#176; Celsius"
        document.getElementById('result2').innerHTML = keltofah(inputtemp) + "&#176; Fahrenheit"
    }
}