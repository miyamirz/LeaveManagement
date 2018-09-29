import React, {Component} from 'react';
import {getCurrentUser,addLeave} from '../helpers/index';
import Logout from './Logout';

function MyLeaves(props){
   
   var currentUser=getCurrentUser(props);
    function showList(){
        return currentUser[0].leaves.map(leave => {
            return <li key={Math.random()}>{leave.reason}</li>
        })
    }
    return(
     <div className="listHeading">
         {currentUser[0].leaves.length>0?`You have applied ${currentUser[0].leaves.length} leaves for following reasons`:'No leaves applied'}
        
       <div className="leaveList">  {showList()}</div>
     </div>
    )
}

class  NewLeave extends Component{
      constructor(props)
      {
       
          super(props);
          this.state={reason:''};
         // console.log(currentUser);
         this.onApply=this.onApply.bind(this);
      }
      
     onApply(){
       if(this.state.reason!=='')
       {
        addLeave(this.state.reason)
        this.props.onApply();
       }  
       else{
           alert("Please enter reason for applying leaving");
       }
      
     }
       render(){
           return (
               <div style={{marginTop:'70px',width:'50%',left:'30%',position:'relative'}}>
               <input type="text" onChange={(e)=>this.setState({reason:e.target.value})} value={this.state.value} placeholder="Enter the reason for your leave"/>
               <button className="btn btn-primary " onClick={this.onApply}>Apply</button> 
               </div>
           )
       }
}
class UserScreen extends Component{
    constructor(props){
     
        super(props);
        this.state={
            showLeaves:false,
            applyLeave:false
        }
        this.onApply=this.onApply.bind(this);
    }
    onApply(){
        this.setState({applyLeave:!this.state.applyLeave})
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={()=>{this.setState({showLeaves:!this.state.showLeaves,applyLeave:false})}}>My Leaves</button>
                <button className="btn btn-primary" onClick={()=>{this.setState({showLeaves:false,applyLeave:!this.state.applyLeave})}}>New Leave</button>
                <Logout handler={this.props.handleLogout}/>
                {this.state.showLeaves?<MyLeaves {...this.props}/>:''}
                {this.state.applyLeave?<NewLeave {...this.props} onApply={this.onApply}/>:''}
            </div>   
        )
    }
}
export default UserScreen;
