//I get the main units and display the sub units

function change() {
  let e = document.getElementById('units');
  let result = e.options[e.selectedIndex].text;

  //if the main unit is time, get create it sub units and output it in the second form
  if (result == 'Time') {
    const output = `<option value=""></option>
      <option id = "unit" value = "second">Second</option>
        <option id="unit" value="hours">Hours</option>
        <option id="unit" value="minutes">Minutes</option>`;

    //getting the second form by id
    const subUnits = document.getElementById('sub-units');

    // outputing sub units in the sesond form
    subUnits.innerHTML = output;
  }
  //if the main unit is weight, get create it sub units and output it in the second form
  else if (result == 'Weight') {
    const output = `<option value=""></option>
        <option id="unit" value="force">Force</option>
        <option id="unit" value="pounds">Pounds</option>
       `;

    //getting the second form by id
    const subUnits = document.getElementById('sub-units');
    // outputing sub units in the sesond form
    subUnits.innerHTML = output;
  }
  //if the main unit is Temperature, get create it sub units and output it in the second form
  else if (result == 'Temperature') {
    const output = `<option value=""></option>
        <option id="unit" value="fahrenheit">Fahrenheit</option>
        <option id="unit" value="celsius">Celsius</option>
        <option id="unit" value="kelvin">Kelvin</option>

       `;

    //getting the second form by id
    const subUnits = document.getElementById('sub-units');
    // outputing sub units in the sesond form
    subUnits.innerHTML = output;
  }
  //if the main unit is Speed, get create it sub units and output it in the second form
  else {
    const output = `<option value=""></option>
        <option id="unit" value="metre per second">Metres Per Second</option>
        <option id="unit" value="kilometer per hour">Kilometers Per Hour</option>
        <option id="unit" value="miles per hour">Miles Per Hour</option>

       `;
    //getting the second form by id
    const subUnits = document.getElementById('sub-units');
    // outputing sub units in the sesond form
    subUnits.innerHTML = output;
  }
}

//Gets the sub units created in the first function
document.getElementById('subUnits').addEventListener('click', (a) => {
  a.preventDefault();
  let e = document.getElementById('sub-units');
  let result = e.options[e.selectedIndex].text;

  if (result == 'Second') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Minutes ${inp / 60}</p>
      <p>Hours ${inp / 3600}</p>`;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Minutes') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Seconds ${inp * 60}</p>
      <p>Hours ${inp / 60}</p>`;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Hours') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Minutes ${inp * 60}</p>
      <p>Seconds ${inp * 3600}</p>`;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Force') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Pounds: ${(inp * 2.2) / 9.8}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Pounds') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Force: ${(inp * 9.8) / 2.2}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Fahrenheit') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Celsius: ${(inp - 32) / 1.8}</p>
      <p>Kelvin: ${(inp - 32) * (5 / 9) + 273.15}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Kelvin') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Celsius: ${inp - 273.15}</p>
      <p>Farenheit: ${inp * (9 / 5) - 459.67}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Celsius') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Kelvin: ${inp * 1 + 273.16}</p>
      <p>Farenheit: ${inp * 1.8 + 32}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Metres Per Second') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Kilometers Per Hour: ${inp * 3.6}</p>
      <p>Miles Per Hour: ${inp * 2.237}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else if (result == 'Kilometers Per Hour') {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Metres Per Second: ${inp / 3.6}</p>
      <p>Miles Per Hour: ${inp / 1.609}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  } else {
    document.getElementById('input').addEventListener('input', (e) => {
      let inp = e.target.value;
      const output = `<p>Metres Per Second: ${inp * 2.237}</p>
      <p>Kilometers Per Hour: ${inp * 1.609}</p>
      `;

      const results = document.getElementById('results');
      results.innerHTML = output;
    });
  }
});
