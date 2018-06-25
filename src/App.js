import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <input type="text" onChange={() => {console.log("I am clicked!")}} />;
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
