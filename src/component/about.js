import React, { Component } from 'react';
// import logo from  "img/logo512.png";
class About extends Component {
    state = {  }
    render() { 
        // console.log("aboutus")
        let {id} =this.props.match.params;
        return ( 
            <React.Fragment>
                <p>At LEE Plan, we do things differently...</p>
                
            </React.Fragment>
         );
    }
}
 
export default About;