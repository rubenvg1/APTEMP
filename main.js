async function obtenerDatos(){

  var cont=0;

  while(true){
    console.log(cont++);
    if (cont>10000000) { break; }{
      const response = await fetch("https://esp-32-flutter-firebase-d47ed-default-rtdb.firebaseio.com/.json");
      const json = await response.json();
      console.log(json);
      console.log(json.humidity);
      console.log(json.state);
      const a = console.log(json.temperature);
    }
  }
}

obtenerDatos();

