import React from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
    return(
        <>
            <div className='container '>
                <div className='row bg-white text-center  mx-auto '>
                    <div className='col-12 col-md-6 mx-auto'>

                    <Link to='/create' ><div className=' btn btn-primary p-2 mb-3 ' style={{width:'300px'}} >Create New</div></Link> 
                    </div>
                </div>
                <div className='row bg-white text-center  mx-auto ' >
                <div className='col-12 col-md-6 mx-auto'>

                <Link to='/dates'><div className=' btn btn-success p-2' style={{width:'300px'}} >View</div></Link>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home;