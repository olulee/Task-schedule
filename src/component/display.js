import React, { Component } from 'react';
import './display.css';
class Display extends Component {
    state = {  }
    handleClick =(d)=>{
        alert(d)
    }
    style={
        backgroundColor:"blue",
        margin: "2px"
    }
    componentWillUnmount(){
        alert("Please dont delete me");
    }
    render() { 
        console.log("good");
        let {name,dept, matric }= this.props.studentDetails;
        const {handleDelete}= this.props;
        return ( 
            <React.Fragment>
                {/* I am a boy */}
                 <p style={{backgroundColor: 'red',fontFamily: 'Arial'}}>The student name is {name}</p>
                <div>He is in {dept} department</div>
                <button style={this.style} onClick= {()=>this.handleClick(dept)}>click</button>
                <button className="myColor" onClick= {()=>handleDelete(matric)}>delete</button>
                    
            </React.Fragment>
         );
    }
}
 
export default Display;