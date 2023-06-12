import React from 'react';
import { Formik,Field,Form } from 'formik';

function MyFormik(props) {
    return (
        <>
            <Formik
                initialValues={{name:'',email:''}}
                onSubmit={
                    async(values)=>{
                        await new Promise((resolve)=>setTimeout(resolve, 500));
                        alert(JSON.stringify(values));
                    }
                }
            >
                <div className="container mt-5">
                    <div className="row">
                        <div className="col text-center ">
                            <Form>
                                <Field name='name' type='text' placeholder='Enter Name' /><br />
                                <Field name='email' type='email' placeholder='Enter Email' className='mt-2' /><br />
                                <button type='submit' className='btn btn-primary mt-3' >Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>            
        </>
    );
}

export default MyFormik;