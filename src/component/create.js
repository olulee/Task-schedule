import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
const Create = ()=>{
    let allDate=[]
    if (localStorage.hasOwnProperty('market')) {
        allDate=JSON.parse(localStorage.getItem('market'))
    }
    let[newDate, setDate] = useState(allDate);
    let [day, setDay] =useState('');
    let [stat, setstat] = useState()
    // let checkContainer = useRef(null)
    let store=false


    const handleSubmit = (e)=>{
        e.preventDefault()
        
        setDate([...newDate,day])
        console.log(newDate)
        localStorage.setItem('market',JSON.stringify(newDate))
        store = true
        setstat(store)
        // console.log(stat)
            // let note = "Item added succesfully";
            // console.log(checkContainer.current.note)
        
    }
    
    const handleChange = (e)=>{
        // e.preventDefault()
        let myDate = e.target.value;
        let value = e.target.name;
        let data = {...day,[value]:myDate}
        setDay(data);
        console.log(day)

    }
    return(
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6 mx-auto text-center bg-info p-3' >Select Date</div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto p-3 bg-light'>
                        {stat?<p className='bg-success'>An instance created succesfully</p>:null}
                    {/* <input className='form-control' name='goods' type='date' onChange={handleChange} />
                    <input className='form-control' name='val' type='date' onChange={handleChange} /> */}
                        
                        <input className='form-control' name='date' type='date' onChange={handleChange} />
                        <input className="form-control" name='budget' type='number' onChange={handleChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto p-3 bg-light'>
                        <button  className='btn btn-secondary text-center m-3' onClick={handleSubmit} >Save</button>
                        <Link to='/dates'><button className='btn btn-secondary tex'>View All</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Create;