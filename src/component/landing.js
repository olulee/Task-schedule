import React, { Component } from 'react';

import Display from "./display";
class Landing extends Component {
    
    myObj = { 
        name: "Taiwo",
        arr: [2, 2, 6, 8],
        students: [
            {
                name: "abc",
                matric: 123,
                dept: "software"
            },
            {
                name: "def",
                matric: 456,
                dept: "hardware"
            },
            {
                name: "ghi",
                matric: 789,
                dept: "multimedia"
            }
    ]
}
constructor(){
    super();
    this.state= this.myObj;
    console.log("I am the constructor");
}
componentDidUpdate(){
    console.log("I am componentdidupdate");
}
componentWillUnmount(){
    alert("I am component will unmount");
}
componentDidMount(){
    console.log("I am componentdidmount");
}
    //  alertName() {
    //     alert(this.state.name);
    //  }
     handleName=()=>{
         let school = "SQI";
         alert(`My name is ${this.state.name} I am a student of ${school}`)
        //  alert(this.state.name);
        //  return <div>Good morning {this.state.name},how are you doing</div>
     }
     handleAlertDept=dept=>{
         alert(dept)
     }
     myDelete=mat=>{
        //  a +=2
        //  a= a+2
        //  let students =this.state.students
         let {students} = this.state;
         students = students.filter(v=>v.matric !==mat);
         this.setState({students})
     }
     show=()=>{
    //  return (this.state.students.length>0 ?  this.state.students.map(val=>
    //         <Display key={val.matric} studentDetails={val} handleDelete= {this.myDelete}/>
    //              // <div key={val.matric}>
    //              //     <p>The student name is {val.name}</p>
    //              //     <div>He is in {val.dept} department</div>
    //              //     <button onClick= {()=>this.handleAlertDept(val.dept)}>click</button>
    //              // </div>
    //              ) :"empty array"
    //  )
                 
     }
    render() { 
        console.log("hello");
        return ( 
            <React.Fragment>
              {/* My name is {this.state.name} */}
              {/* <ol>
                {this.state.arr.map((val, i)=>
                    <li key={i}>{val}</li>
                )}
            </ol> */}
            {/* {this.state.arr.map((val, i)=>
            <div key={i}>
                    <div>
                        I am {val}years old
                    </div>
                    <div>
                        hello
                    </div>
            </div>
                )} */}
            {/* {this.alertName()} */}
            {/* <button onClick={this.handleName}>click</button> */}
            {/* {this.show()}  */}
           { this.state.students.length>0 ?  this.state.students.map(val=>
            <Display key={val.matric} studentDetails={val} handleDelete= {this.myDelete}/>
                 // <div key={val.matric}>
                 //     <p>The student name is {val.name}</p>
                 //     <div>He is in {val.dept} department</div>
                 //     <button onClick= {()=>this.handleAlertDept(val.dept)}>click</button>
                 // </div>
                 ) :"empty array"}
            </React.Fragment>
         );
    }
}
 
export default Landing;