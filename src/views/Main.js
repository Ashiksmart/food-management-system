import React from "react";
import '../css/Main.css'
import Slidebar from "./Slidebar";

class main extends React.Component {
    constructor() {
        super();
        this.state = {"slidebar" : true}
    }

render() {
    return (
        <>
            
            
            <Slidebar width={this.state.slidebar ? 210+"px" : 0 }/>
       
      
            <div>
                <main style={{"margin-left" : this.state.slidebar && 210+"px"}} className="mainContainer">
                   <div>
                    <div onClick={()=>{
                        this.setState({
                            "slidebar" : !this.state.slidebar
                        })
                    }}>
                        {
                            this.state.slidebar ? <box-icon name='chevrons-left' type='solid' color='#ffffff' ></box-icon>:<box-icon name='chevrons-right' type='solid' color='#ffffff' ></box-icon>
                        }
                    
                    </div>
            
                <h3>Dashboard {this.state.slidebar.toString()}</h3>
                   </div>
                </main>
                
            </div>
        </>
    )
}
}

export default main;