import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import '../styles/styles.css';
class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
        this.onSubmit=this.onSubmit.bind(this);
    }
     
     onSubmit(e){
         e.preventDefault();
         
         //TODO - Validation 
         var currentUser=null;
         var users=this.props.users;
         users.map(user => {
           
              if(user.name === this.state.username && user.password === this.state.password)
              {
                currentUser=user;
              }
                
         });
      
         if(currentUser!==null)
         {
            localStorage.setItem('LoggedInAs',currentUser.name)
            this.props.handleSubmit(currentUser);
         }
         else{
             alert("Enter valid credentials");
         }
     }
    render(){
        return (
            <div>
            <Header />
            <div className="loginDiv">
                <form onSubmit={this.onSubmit}>
                  <input placeholder="Enter username" type="text" value={this.state.username} onChange={(e)=>{ this.setState({username:e.target.value}) } }/>
                  <input placeholder="Enter password" type="password" value={this.state.password}  onChange={(e)=>this.setState({password:e.target.value})}/>
                  <button className="btn btn-primary btn-sm btnLogin" type="submit">Login</button>
                </form>
            </div>
            </div>
        )
    }
}
function mapStateToProps({usersList}){
    if(usersList)
    {
        return{
            users:usersList
        }
    }
    else{
        return{
            users:[]
        }
    }
    
}
export default connect(mapStateToProps)(LoginScreen);
