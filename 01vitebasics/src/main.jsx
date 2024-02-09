import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const Myapp = ()=>{
//   return (
//     <h1>this is my app</h1>
//   )
// }

// const MyVariable = (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )


const evaluatedExpression = '<--this is some evaluated expression-->';
const customElement = React.createElement(
  'a',
  {
    href:'https://facebook.com',
    target: '_blank'
  },
  `click me to go anywhere`,
  evaluatedExpression
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <Myapp />
    // Myapp()
    // MyVariable
    customElement
)