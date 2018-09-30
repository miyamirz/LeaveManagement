import React,{Component} from 'react';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            currentUser:null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
    }

    handleSubmit(currentUser){
     //  console.log(currentUser)
        this.setState({isUserLoggedIn:true,currentUser})
      
    }
 handleLogout(){
   
        this.setState({isUserLoggedIn:false,currentUser:null});
        localStorage.removeItem('LoggedInAs');
      
    }
    render() {
        return ( 
            <div className="container">
                {this.state.isUserLoggedIn?<Dashboard handleLogout={this.handleLogout} currentUser={this.state.currentUser} />:<LoginScreen handleSubmit={this.handleSubmit}/>}
            </div>
        )

    }
}

export default App;
