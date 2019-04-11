import React, { Component } from 'react'
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
	        username: '',
	        password: '',
        } 
        
        this.handleChangeUser = this.handleChangeUser.bind( this )
        this.handleChangePass = this.handleChangePass.bind( this )
    }

    handleChangeUser(val){
        this.setState({ username: val })
     }
     
     handleChangePass(val){
        this.setState({ password: val })
     }
     
    



    render () {
        return (
            <div className='container'>
                <input className='inputBox' type='text' placeholder='Username' onChange={ ( e ) => this.handleChangeUser( e.target.value ) } />

                <input className='inputBox' type='text' placeholder='Password' onChange={ ( e ) => this.handleChangePass( e.target.value ) } />

                <button className='button' onClick={ () => { window.alert(`Logging in ${ this.state.username } with password ${ this.state.password }`)} } > Login </button>

            </div>
        )
    }
}




export default Login;