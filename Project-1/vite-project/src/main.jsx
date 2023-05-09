import React from 'react'
import App from './App'
import './index.css'
import ReactDOM from "react-dom";
import './i18n.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.render(<App />, document.getElementById("app"));