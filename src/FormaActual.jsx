import React, { useState, useEffect } from "react";
let intervalId;

function FormaActual() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    intervalId = setInterval(() => setSeconds((seconds) => seconds + 1), 1000);
    return () => {
      console.log(
        "Se ejecuta automaticamente cuando el componente se desmonta"
      );
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    console.log("Se ejecuta el useEffect2 cuando cambia seconds");
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
  }, [seconds]);

  return (
    <div>
      Segundos New: {seconds}
      <br />
      Minutos New: {minutes}
    </div>
  );
}

export default FormaActual;
