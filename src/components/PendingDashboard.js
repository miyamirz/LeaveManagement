import React,{Component} from 'react';
import {getLeaveRequests} from '../helpers/index'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
       

 class PendingRequests extends Component {
     constructor(props){
         super(props);
         console.log(props)
     }
     setTableData(){
        const requests = getLeaveRequests();
        const pending = requests.filter(request => request.status === 'Pending');  
       var pendingArr = pending.map((obj,index) => ({ id:++index,user:obj.user,userComments:obj.pending.reason}))
        return pendingArr;
   
       }
        render() {
          return (
            <div className="pendingTable">
              <BootstrapTable data={this.setTableData()}>
                <TableHeaderColumn isKey dataField='id'>
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn dataField='user'>
                  User
                </TableHeaderColumn>
                <TableHeaderColumn dataField='userComments'>
                  User Comments
                </TableHeaderColumn>
                
              </BootstrapTable>
            </div>
          );
        }
      }
       
export default PendingRequests;
