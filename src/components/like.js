import React from "react"

class Like extends React.Component{

    state= {
        count: 0
    }

    handleCount= () => {
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