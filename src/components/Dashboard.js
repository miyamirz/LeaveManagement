import React from 'react';
import AdminScreen from './AdminScreen';
import UserScreen from './UserScreen';
export default (props) => {
        return (
            <div>
                {props.currentUser.type === 'admin'?<AdminScreen {...props}/>:<UserScreen {...props}/>}
            </div>
        )
    }
