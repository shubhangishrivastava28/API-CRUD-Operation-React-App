import React, { useState, useEffect } from 'react'
const UseeffectHook = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            setUsers(await response.json());
        }

    useEffect(() => {
        getUsers();
    }, []);

          return (

//               <div className="container">
// {users.map((curElem,i) => (
//         <div className="col-xs-12">
//         <h1>My Todos</h1>
//           <div className="card">
//             <div className="card-body">
//               <div className="card-title"> UserId: {curElem.userId}</div>
//               <h6 className="card-subtitle mb-2 text-muted">id:{curElem.id}  </h6>
//               <h6 className="card-subtitle mb-2 text-muted">Title:{curElem.title} </h6>
//             </div>
//           </div>
//         </div> 
//  ) )
//          }
//        </div>
//           );

                 <div className="App">
                      <div className="container">
                           <center><h1>API Call from Front-End</h1></center>
                            {/* <button onClick={fetchapi}>Button 1</button> 
                                  <button onClick={fetchapi}>Button 2</button> */}
     
                                  <div>
                                    {/* <button className="fetch-button" onClick={this.fetchapi}>
                                        Fetch Data
                                              </button> */}
                                  </div>
        
                                           {users.map((curElem,i) => (

                                          <div class="card3-body ">
                                              <div className="repo-container">             
                                                 <p> S.no-{i+1} : </p>
                                              <p> 
                                         UserId: {curElem.userId}| id:{curElem.id} | Title:{curElem.title} |Status: {curElem.completed}  
                                               {/* Status: {curElem.completed = "true" } */}
                                                {/* Status: { curElem.completed && <span>true</span> */}
                                                   {/* | Bool: {contact.completed ? "true" : "false"} */}
                                              
                                              </p>

                                          </div>
                                  </div>
                    ))}
                       </div>
                  </div>  
    )
}


//     return (
//         <div>
//         <>
//             <h2>API CALL FROM FRONT END</h2>
//             <div className="container-fluid mt-5">
//                 <div className="row text-center">
                    
//                 {
//                         users.map((curElem) => {
//                               const {userId,id, title, completed } = curElem;
//                             //const { avatar_url, id, login, type } = curElem;
//                         return (
//                     <div className="col-10 col-md-4 mt-5" key={id}>
//                            <div className="card p-2">
//                                 <div className="d-flex align-items-center">
//                                         <div className="image"> { curElem.userId } className="rounded" width="155" /> </div>
//                                     <div className="ml-3 w-100"> 
//                                             <h4 className="mb-0 mt-0 textLeft">Shubhangi </h4> }
//                                             { <span className="text-left">{curElem.id }</span>
//                                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
//                                                 <div className="d-flex flex-column">
//                                                     <span className="articles">id</span> <span className="number1">38</span> </div>
//                                                 <div className="d-flex flex-column">
//                                                     <span className="followers">title</span> <span className="number2">980</span> </div>
//                                                 <div className="d-flex flex-column">
//                                                     <span className="rating">completed</span> <span className="number3">8.9</span> </div>
//                                         </div>
                                      
//                                     </div>
//                              </div>
//                           </div>
//                     </div>
//                         )
//                 })        

//                 }
                    
//                 </div>
//             </div>
//         </>
//         </div>
//     )
// }

export default UseeffectHook
