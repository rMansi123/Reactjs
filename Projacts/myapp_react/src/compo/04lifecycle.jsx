import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}

    }

    // componentWillMount() {

    // }

    componentDidMount() {
        setTimeout(() => {
            console.log('componentDidMount called');
        }, 3000);

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps called');
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate called');
        console.log("next",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate called');
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prev called",prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called');
    }
    btnclick=()=>{
        console.log("btn called");
        this.setState({counter:this.state.counter+1})
    }

    render() {
        console.log("render called");
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-danger' onClick={()=>this.setState({counter:this.state.counter-1})}>Decrement</button>
                            <h1>{this.state.counter}</h1>
                            <button className='btn btn-primary' onClick={this.btnclick}>Increament</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default lifecycle;