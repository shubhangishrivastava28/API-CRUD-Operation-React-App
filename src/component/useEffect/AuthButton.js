import React, {UseeffectHook} from "react";
//import UseeffectHook from "./component/useEffect/useeffectHook";

const AuthButton = props => {
  let { isLoggedIn } = props;

function Button1()
 {
    alert('clicked button 1');
 }
 function Button2()
 {
    alert('clicked button 2');
 }
  if (isLoggedIn) {
    return  <div> <button onClick={Button1 }> Button 1 </button> </div>
  } else {
    return <div> <button onClick={Button1 }> Button 1 </button> 
                 <button onClick={UseeffectHook }> Button 2 </button> 
           </div>
  }
};

export default AuthButton;
















// import React from "react" ;

// const Usebutton = 

// function Button1()
// {
//    alert('click me!');
// }
// export default function App()
// {
//     // return{

//     //     <div> <button onClick={Button1 }> Button 1 </button> </div>
//     //     );
    
// }


























// function Button1() {
//   //alert('You clicked me!');
// }
// <button onClick={Button1}>Button 1</button>;

// function Button2() {
//   //alert('You clicked me!');
// }

// <button onClick={Button2}>Button 2</button>;

// export default button

