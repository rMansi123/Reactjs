import React from 'react';
import { useState } from 'react';
import { PostAPIAction } from '../action/index';
import { useDispatch } from 'react-redux';


function SubmitData(props) {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[phone,setphone]=useState('')
    const[country,setcountry]=useState('')

    const dispatch = useDispatch();


    const Namedata=(e)=>{
        setname(e.target.value)
    }
    const Emaildata=(e)=>{
        setemail(e.target.value)
    }
    const Phonedata=(e)=>{
        setphone(e.target.value)
    }
    const Countrydata=(e)=>{
        setcountry(e.target.value)
    }

    const clickData=(e)=>{
        const Finaldata={
            name:name,
            email:email,
            phone:phone,
            country:country
        }
        dispatch(PostAPIAction(Finaldata))
        

        // if (Finaldata) {
        //     window.location.reload(false);
        // }
    };

    return (
        <>
            <div className="container">


                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder='Enter Name'
                        onChange={(e) => Namedata(e)} />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter Email'
                        onChange={(e) => Emaildata(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" placeholder='Enter Phone'
                        onChange={(e) => Phonedata(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Country</label>
                    <input type="text" placeholder='Enter Country' className="form-control" id="country"
                        onChange={(e) => Countrydata(e)} />
                </div>

                <button className="btn btn-primary" onClick={(e) => clickData(e)}>Submit</button>
            </div>
        </>
    );
}

export default SubmitData;