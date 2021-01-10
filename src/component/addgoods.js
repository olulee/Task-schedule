import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// export const myContext = React.createContext();
const Addgoods =()=>{
    let allGood = []
    if (localStorage.hasOwnProperty('marketitem')) {
        allGood = JSON.parse(localStorage.getItem('marketitem'))
    }
    let [goods, setGoods] = useState(allGood);
    let [data, setData] = useState({});
    // let data= {};
    let params = useParams()
    console.log(params)
    let market = []
    
    if (localStorage.hasOwnProperty('market')) {
        market = JSON.parse(localStorage.getItem('market'))
    }
    let mrtData = market.find((m,i)=>(m.date === params.date))
    console.log(mrtData.budget)
    let [marketData, setMarketData] = useState(mrtData.budget)
    // setMarketData(mrtData.budget)
    // let history = useHistory()
    let [sum,setSum] = useState(0);

    const handleChange=(e)=>{
        let value = e.target.value;
        let name = e.target.name;
        let formData = {...data,[name]:value,date:params.date,status:'Pending'}
        setData(formData);
        let total = 0;
        if(formData.price && formData.Quantity){
            total = formData.Quantity * formData.price
        }
        setSum(total)
        let reduce = mrtData.budget - total ;
        console.log(reduce)
        setMarketData(reduce)
        
        console.log(data);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setGoods([...goods,data])
        localStorage.setItem('marketitem',JSON.stringify(goods))

        console.log(goods)
    }


    return(
        <>
            <div className='container'>
                <div className='row mt-5'>{marketData < mrtData.budget*0.3 ? 
                    <div className='col-12 col-md-6 mx-auto text-center bg-danger p-3' >Add Items 
                    <span>Watch your expenses</span> </div>:
                    <div className='col-12 col-md-6 mx-auto text-center bg-info p-3' >Add Items</div>}
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto p-3 bg-light'>
                        {/* {stat?<p className='bg-success'>An instance created succesfully</p>:null} */}
                        <input className='form-control' name='goods' type='text' placeholder='Name' onChange={handleChange} />
                        <input  className='form-control' name='price' type='number' placeholder='price' onChange={handleChange} />
                        <input  className='form-control' name='Quantity' type='number' placeholder='Quantity' onChange={handleChange} />
                        <p>Sum: {sum} <span className='float-right'>Budget: {marketData} </span> </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto p-3 bg-light'>
                        <button disabled={marketData< 0}  className='btn btn-secondary text-center m-3' onClick={handleSubmit} >Save</button>
                        <Link to={`/viewdate/${params.date}`}><button className='btn btn-secondary tex'>View All</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addgoods;