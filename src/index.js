import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import { HashRouter } from 'react-router-dom'
import mirror, { render, Router } from 'mirrorx'

mirror.defaults({
  historyMode: 'hash'
})

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
