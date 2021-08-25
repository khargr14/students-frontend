import React from "react"
//import { useState, Component } from "react"

//Functional
// const Like =()=>{


//     // set state
// const [count, setCount] = useState(0)

//  const handleCount=()=> {
   
//     setCount(count + 1)
//   }

//     return(
//         <div>
//         <button class="btn btn-success" onClick={handleCount}>Like</button> &nbsp; &nbsp;<span>{count}</span>
//         </div>
//     )

// }

//Class

class Like extends React.Component{

    // set state
state={
    count: 0
}

handleCount=()=>{
    this.setState({count: this.state.count+1})
}

render(){
return(
    <div>
      <button class="btn btn-success" onClick={this.handleCount}>Like</button> &nbsp; &nbsp;<span>{this.state.count}</span>
      </div>
)


}
}
export default Like