import './App.css'
import Timer from './FormaAntigua'
import TimerDos from './FormaActual'

function AppPepe({nombre}) {

  // Este return debe regresar solo una etiqueta hija que este caso es un div
  return (
    <div className="App">
      <h1>I'm Pepe Main B|</h1>
      <h3>Timer antiguo</h3>
      <Timer />
      <h3>Timer actual</h3>
      <TimerDos/>
    </div>
  )
}

export default AppPepe
