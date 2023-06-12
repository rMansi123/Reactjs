import React, { useEffect, useState } from 'react';

function API(props) {
    const[data,setData]=useState({})
    const[loader,setLoader]=useState("Pending...")

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/albums').then((res)=>res.json()).then((Response)=>{
                console.log(Response);
                setLoader('completed')
                setData(Response)
            })
            
        }, 2000);
    })
    return (
        <>

        {/* <div>{loader == 'cpmpleted'?<div>{JSON.stringify(data)}</div>:'no data found'}</div> */}
        {loader ?
        <>
        <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </>: 
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{loader}</h1>
                        {Object.entries(data).map((ele,index)=>{
                            console.log(ele);
                            return <ul>
                                <li>{ele[1].userId}</li>
                                <li>{ele[1].title}</li>
                            </ul>
                        })}
                    </div>
                </div>
            </div>
        </>}
            
        </>
    );
}

export default API;