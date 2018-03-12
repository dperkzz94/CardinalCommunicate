import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            email:""
        }
    }


    onSubmit(e){
        e.preventDefault();
        axios.post("#",{username:this.state.username, email:this.state.email, password:this.state.password}).then(()=> {
            this.props.history.push("/Profile")
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.onSubmit(e)} style={{marginLeft: "40%"}}>
                    <h1>Welcome! Register here!</h1>
                    <h2>Username</h2>
                    <input onChange={(e)=>this.setState({username:e.target.value})} value={this.state.username}/>
                    <h2>Email</h2>
                    <input onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
                    <h2>Password</h2>
                    <input onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}/>
                    <input className="button" type="submit" value="submit"/>
                    <h2>Already have an account? Click here!</h2>
                    <button><Link to='/Login'>Login</Link></button>

                </form>
            </div>
        );
    }
}