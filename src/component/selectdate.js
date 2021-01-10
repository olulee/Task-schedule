import React, {  useRef, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
const SelectedDate = ()=>{
    // let status = "Pending"
    let param = useParams()
    let histroy = useHistory()
    let inputRef = useRef(null)
    console.log(param.id)
    let items = []
    let [newItems,setNewItems] = useState()
    if (localStorage.hasOwnProperty('marketitem')) {
        items = JSON.parse(localStorage.getItem('marketitem'))
    }
    newItems = items.filter(each=>(each.date ===param.id ))
    let [index,setIndex]= useState()
    // console.log(histroy)
    const handleHis=()=>{
        histroy.goBack()
    }
    const handleDelete = (index)=>{
        newItems = newItems.filter((d,i)=>(i!==index))
        save(newItems)
        // localStorage.setItem('marketitem',JSON.stringify(newItems))
        // setNewItems(newItems)
        // console.log(newItems)
    }
    const save = (data)=>{
        // newItems = newItems.filter((d,i)=>(i!==index))
        localStorage.setItem('marketitem',JSON.stringify(data))
        setNewItems(data)
    }
    const handleChangeStatus = (id)=>{
        // let value = event.target.value
        let value = inputRef.current.value
        console.log(id)
        console.log(value)
        if (value === 'on') {
            // let tempnewItems
           let response= newItems.findIndex((e,index)=>{
                return index === id
            })
            if (response>=0) {
                newItems[response].status="bought"
                // setNewItems(newItems)
                save(newItems)
                // console.log(newItems)
            }
            // status='Bought'
        }
    }
    // console.log(newItems)
    // useEffect(()=>{
    // })
    // console.log(items)
    return(
        <>
        <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-10 mx-auto text-center bg-info p-3' >Goods for {param.id} </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto p-3 bg-light'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>View</th>
                                    <th>Delete</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        {newItems.length>=1? newItems.map((each,i)=>{
                            return(
                                    <tbody key={i} >
                                <tr>
                                    <td> {each.goods} </td>
                                    <td> <Link to={`/viewitem/${each.goods}`}><button className='btn btn-success'>view</button></Link> </td>
                                    <td><button className='btn btn-danger' data-toggle="modal" data-target="#myModal" onClick={()=>setIndex(i)} >delete</button></td>
                                    <td> {each.status} <input checked={each.status==="bought"} disabled={each.status==="bought"} ref={inputRef} name="status" onChange={()=>handleChangeStatus(i)} type='checkbox' /> </td>
                                </tr>
                                  
                                
                                {/* <div>{each.goods}</div> */}
                                </tbody>
                                )
                            }):<div className='p-3'>Please Add Goods to this date</div>}
                        </table>        
                    </div>
                </div>
                <div className='row '>
                    <div className='col-12 col-md-6 mx-auto p-3 bg-white'>
                        <Link to={`/addgoods/${param.id}`}><button  className='btn btn-primary text-center m-3'  >Add Goods</button></Link>
                        <button className='btn btn-warning tex' onClick={handleHis} >Go Back</button>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    {/* <div className="modal-header">
                        <h4 className="modal-title">Action</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div> */}
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="">Are you sure you want to delete?</h4>
                        <button className='btn btn-danger m-3' data-dismiss="modal" onClick={()=>handleDelete(index)}>Yes</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectedDate;