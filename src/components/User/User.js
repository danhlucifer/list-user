import React, { Component } from 'react'
import Navbar from '../Navbar';

class User extends Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
    }
    render() {
        return (
            <>
                <Navbar title='User Form' />
                <div className='container user'>
                    <div className='row'>
                        <div className='col-8'>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User