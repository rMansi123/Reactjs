import React from 'react';
import {GetAPIAction,DeleteAPIAction} from '../action/index'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    Link,
  } from "react-router-dom";
import SubmitData from './SubmitData'

function Home() {
    const returndata = useSelector((state)=>state.reducer.details)
    const Deletedata = useSelector((state)=>state.reducer.isDelete)
    // console.log(returndata);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetAPIAction())
    },[dispatch]);

    if(Deletedata)
    {
        window.location.reload(false);
    }

    const result = returndata?returndata.map((res)=>{
        return<>
            <tr>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.country}</td>
                <td><button className='btn btn-danger' onClick={() => dispatch(DeleteAPIAction(res.id))}>Delete</button></td>
                
                <td><Link to={`Update/${res.id}`}> <button className=' ms-2 btn btn-success'>Edit</button></Link></td>
            </tr>
        </>
    }):null;
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <center><h1 className='text-danger'>Welcome to Reduc CRUD Application</h1></center>
                <div className="col mt-5">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>PHone</th>
                                <th>Country</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr> 
                        </thead>                                          
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <SubmitData />
        </>
    );
}

export default Home;