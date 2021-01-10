import React from 'react';
import Navbar from './component/navbar';
// import Landing from './component/landing';
import Home from './component/home'
import {BrowserRouter, Route,  Switch} from 'react-router-dom';
import About from './component/about';
import DoesNotExist from './component/doesnotexist';
import Create from './component/create';
import Viewdate from './component/viewdate';
import SelectedDate from './component/selectdate';
import Addgoods from './component/addgoods';
import ViewItems from './component/viewItem';
function App() {
  

  return (
    
    <React.Fragment> 
       <BrowserRouter>
      <Navbar/>

     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/create' component={Create} />
        <Route path='/dates' component={Viewdate}/>
        <Route path='/viewdate/:id?' component={SelectedDate}/>
        <Route path='/addgoods/:date?' component={Addgoods}/>
        <Route path='/viewitem/:item?' component={ViewItems}/>
        <Route path="/about/:id?" component={About}/>
        <Route component={DoesNotExist}/>
      </Switch>
      </BrowserRouter>
      
       
       {/* <Landing/> */}
    </React.Fragment>
       
    
   
  );
}

export default App;
