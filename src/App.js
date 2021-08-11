// import React from 'react';
// import './App.css';
// import './component/useEffect/useeffectHook';
// import UseeffectHook from "./component/useEffect/useeffectHook";
// //import Button from "./component/useEffect/Button";
// //import './component/useEffect/StylButton';


// const App = () => {

//   return (<UseeffectHook/>)
// } 

// export default App
//---------------------------------------------------------------------------

// import React, { isLoggedIn, Component } from "react";
// import './App.css';
// import AuthButton from "./component/useEffect/AuthButton";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>
//           API Call from Front End
//         </h1>
//         <AuthButton isLoggedIn={isLoggedIn} />
//       </div>
//     );
//   }
// }

// export default App;
//--------------------------------------------------------------------------
// import React from 'react';
// import './App.css';

// class App extends React.Component {

//   callApi(){
//     // Github fetch library : https://github.com/github/fetch
//     // Call the API page
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((result) => {
//       // Get the result
//       // If we want text, call result.text()
//       return result.json();
//     }).then((jsonResult) => {
//       // Do something with the result
//       console.log(jsonResult);
//     })
//   }
  
//   render() {
//     return <div>
//       <button onClick={() => this.callApi()}>
//         Click here to call API
//       </button>
//     </div>;
//   }
// }

// //React.render(<Application />, document.getElementById('app'));
// export default App;

//-----------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ScotchInfoBar from './component/useEffect/ScotchInfoBar';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);

  const fetchDatatrue = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    setUsers(response.data);
  };

  const fetchDatafalse = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    setUsers(response.data);
  };
   
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


  return (
    <div className="App">
      <h1>API CALL FROM FRONT END</h1>
      <h2>Fetching list from API and displaying it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button1" onClick={fetchDatatrue}>Click here to Fetch API</button>
        {/* <button className="fetch-button2" onClick={fetchDatafalse}>Button 2</button> */}
        <br />
      </div>

      {/* Display data from API */}
      <div className="boxes">
        {users &&
          users.map((user, index) => {
           const {id, userId, title} = user;

            return (
              <div className="box" key={index}>
                <h3>S.No: {index + 1}</h3>

                <div className="details">
                 
                  <p>USERId: {user.userId}</p>
                  <p>ID: {user.id}</p>
                  <p>TITLE: {user.title}</p>
                     {
                      user.completed?<p style={{color: "green"}}>{user.completed ? "Done" : "Pending"}</p>:
                      <p style={{color: "red"}}>{user.completed ? "Done" : "Pending"}</p>
                     }
                   <button className="btn btn-danger" onClick={() => deleteUser(id)}>Remove</button>                 
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;

