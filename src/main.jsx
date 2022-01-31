import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppPepe from './App'

// ->Importar Bootstrap va aquí si se hace desde npm instal bootstrap-<
// import Boostrap from 'Boostrap'

ReactDOM.render(
  <React.StrictMode>
    <AppPepe nombre='Pepe'/>
  </React.StrictMode>,
  document.getElementById('root')
)
