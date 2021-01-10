import React from 'react';
import { useParams } from 'react-router-dom';
const ViewItems = ()=>{
    let params = useParams()
    console.log(params)
    let items
    if (localStorage.hasOwnProperty('marketitem')) {
        items = JSON.parse(localStorage.getItem('marketitem'))
    }
    let detail = items.find(goods=>goods.goods === params.item)
    console.log(detail)
    return(
        <>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6 mx-auto'>
                        <div className='bg-info p-2'>
                            {params.item} Info
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mx-auto'>
                        <div className='bg-light p-2'>
                            <p>Item: {detail.goods} </p>
                            <p>Date: {detail.date} </p>
                            <p> Quantity: {detail.Quantity} </p>
                            <p> Price: #{detail.price} </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewItems;