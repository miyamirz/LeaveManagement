import React from 'react';
export default (props)=> {
  console.log(props)
      return(
          <button className="btn btn-danger" onClick={props.handler}>Logout</button>
      )
}