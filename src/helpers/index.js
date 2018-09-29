export function getCurrentUser(props){
    var localUsers=(JSON.parse(localStorage.getItem('localData'))).usersList;
    var currentUser = localUsers.filter(user => user.name ===  props.currentUser.name);
    return currentUser;
}
export function addLeave(reason){
  var currentUser = localStorage.getItem('LoggedInAs');
  var localUsers=(JSON.parse(localStorage.getItem('localData'))).usersList;
  var newObj={usersList:[]};
  for(let i =0 ;i<localUsers.length;i++){
      if(localUsers[i].name === currentUser){
          localUsers[i].leaves.push({reason:reason,status:'Pending'});   
          newObj.usersList.push(localUsers[i]);
          
      } 
      else
      {
       newObj.usersList.push(localUsers[i]);
      }
  }
  console.log(newObj);
  localStorage.setItem('localData',JSON.stringify(newObj));

}


export function getLeaveRequests(){

    var localUsers=(JSON.parse(localStorage.getItem('localData'))).usersList;
   // var pending,approved,RequestsArray;
   let RequestsArray=[];
    localUsers.map(user=> {
               
            if(user.type!=='admin')
                {
                user.leaves.map(leave=>{
                    if(leave.status === 'Pending')
                    RequestsArray.push({user:user.name,pending:leave,status:leave.status});
                    else
                    RequestsArray.push({user:user.name,approved:leave,status:leave.status});
             
                }
             
            )       
    }});
    return RequestsArray;
}