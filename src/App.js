import React from 'react'
import ReactDOM from 'react-dom'

const SayHi = (props) => {
  return(
      <div>
        <p>Hello {props.name}, are you {props.age} years old?</p>
      </div>
  )
}

const App = () => {
  const now = new Date();
  const name = "Leon"
    const ageLeon = 4;
  const ageElena = 25;

  return (
      <>
        <p>Today is {now.toDateString()}</p>
        <SayHi name={name} age={ageLeon}/>
        <SayHi name="Elena" age={ageElena}/>
      </>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))