import React from 'react';
export default (props)=> {
  console.log(props)
      return(
          <button className="btn btn-danger" style={{position:'absolute',left:'90%'}} onClick={props.handler}>Logout</button>
      )
}
