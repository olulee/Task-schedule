import React from 'react';
import { Link } from 'react-router-dom';
// import { myContext } from './addgoods';
const Viewdate = ()=>{
    let dates = []
    if (localStorage.hasOwnProperty('market')) {
        dates = JSON.parse(localStorage.getItem('market'))
    }
    console.log(dates.length)
    return(
        <>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6 mx-auto border bg-info'>
                        <div className='row'>
                            <div className='col-12 col-md-6 mx-auto p-2'>
                                <p>All Dates</p>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-12 col-md-10 mx-auto p-2 bg-light'>
                                {dates.length>=1 ? dates.map((each,i)=>{
                                    return(

                                        // console.log(each.date)
                                        <Link  key={i} to={`viewdate/${each.date}`}><div className=' p-2 mx-auto' >{each.date}</div></Link>
                                    )
                                }): <p>You have not selected any date</p> }    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Viewdate;