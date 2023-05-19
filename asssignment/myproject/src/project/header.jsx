import React from 'react';
import{
    Link,
} from "react-router-dom";

function Header(props) {
    return (
        <>
            {/* <div className="contaoner header p-1">
                <p className='text-center'>Whether you build with click,code,or both,build success now with
                    Salesforce at TrailblazerDX. Watch now,on demand 
                </p>
            </div> */}
            <div className="container-fluid header">
            <div className="row" >
                    <div className="col-6 p-5 mt-5">
                        <h1>AI + Data + CRM. It all adds up to customer magic.</h1>
                        <p>Personalise every customer interaction with Einstein GPT, Data Cloud, and Customer 360, the #1 CRM.
                           {/* <Link className="nav-link active" aria-current="page" href="#">See how</Link> */}
                        </p>
                        {/* <div >
                            <button className="btn btn-primary" type="submit">Start free trial</button>
                            <button className="btn btn-outline-primary" type="submit">WATCH DEMO</button> 
                        </div>                     */}
                        <button className="btn btn-primary mt-5" type="submit">Start free trial</button>
                        <button className="btn btn-outline-primary mt-5" type="submit">WATCH DEMO</button> 
                                               
                    </div>
                    <div className="col-6 mt-5">
                        <img src="img/headerbg.webp" className='headerbg' alt="pc" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;