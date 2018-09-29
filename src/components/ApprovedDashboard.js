import React,{Component} from 'react';
import {getLeaveRequests} from '../helpers/index'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
       

 class ApprovedRequests extends Component {
     constructor(props){
         super(props);
         console.log(props)
     }
     setTableData(){
        const requests = getLeaveRequests();
        const approved = requests.filter(request => request.status === 'Approved');
       var approvedArr = approved.map((obj,index) => ({ id:++index,user:obj.user,userComments:obj.approved.reason}))
        return approvedArr;
   
       }
        render() {
          return (
            <div className="approvedTable">
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
       
export default ApprovedRequests;
