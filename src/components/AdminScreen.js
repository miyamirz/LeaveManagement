import React, {Component} from 'react';
import Logout from './Logout';
import {getLeaveRequests} from '../helpers/index';
import PendingDashboard from './PendingDashboard';
import ApprovedDashboard from './ApprovedDashboard';
import '../styles/styles.css';
function LeaveDashboard(){
     const requests = getLeaveRequests();
  
     const pending = requests.filter(request => request.status === 'Pending');
     const approved = requests.filter(request => request.status === 'Approved');
    return(
        <div>
            <div className="pending" ><label style={{color:'#ffffff'}}>{`PendingRequests:${pending.length}`}</label></div>
            <div className="approved"><label style={{color:'#ffffff'}}>{`ApprovedRequests:${approved.length}`}</label></div>
        </div>
    )
}
class AdminScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            homeVisibility:true,
            pendingVisibility:false,
            approvedVisibility:false
        }
       this.setLastLogin();
    }
    setLastLogin(){
        
        if(localStorage.getItem('adminLastLogin') === "null")
        {
            debugger;
            localStorage.setItem('adminLastLogin',new Date().toLocaleString());
        }   
}
    render(){
        return(
            <div className="adminOptions">
                <button className="btn btn-primary" onClick={() => this.setState({homeVisibility:true,pendingVisibility:false,approvedVisibility:false})}>Dashboard</button> 
                <button className="btn btn-primary" onClick={() => this.setState({homeVisibility:false,pendingVisibility:true,approvedVisibility:false})}>Pending Requests</button> 
                <button className="btn btn-primary" onClick={() => this.setState({homeVisibility:false,pendingVisibility:false,approvedVisibility:true})}>Approved</button> 
                <Logout handler={this.props.handleLogout}/>
                {this.state.homeVisibility?<LeaveDashboard/>:''}
                {this.state.pendingVisibility?<PendingDashboard data={this.setTableData}/>:''}
                {this.state.approvedVisibility?<ApprovedDashboard/>:''} 
              
            </div>
        )
    }
}
export default AdminScreen;
