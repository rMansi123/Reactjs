import React, { Component } from 'react';

class Reuse extends Component {
    render() {
        return (
            <>
            <div className="card">
                            <img src={this.props.imgsrc} alt="" />
                            <div className="card-body p-3">
                                <h3>{this.props.title}</h3>
                                <div className="col">
                                    <span>{this.props.text}</span>                        
                                </div>
                                <button className='btn btn-primary mt-4' >Watch demo</button>
                            </div>
            </div>
            
            </>
        );
    }
}

export default Reuse;