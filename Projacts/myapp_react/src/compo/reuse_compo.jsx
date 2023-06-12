import React, { Component } from 'react';

class reuse_compo extends Component {
    render() {
        return (
            <>
            <div className="card text-center">
                            <img src={this.props.imgsrc} alt="" />
                            <div className="card-body">
                                <h3>{this.props.title}</h3>
                                <div className="col">
                                    <span>Old price <del>Rs. {this.props.oldPrice}</del></span><br />
                                    <span>New Price: Rs. {this.props.newPrice}</span>
                                </div>
                                <button className='btn btn-primary mt-4' onClick={this.props.mybtn}>Buy Now</button>
                            </div>
                        </div>
            </>
        );
    }
}

export default reuse_compo;