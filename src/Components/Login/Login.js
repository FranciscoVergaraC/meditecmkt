import React from 'react';
import './Login.css';

class Login extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
          user: "Francisco",
          password: "12345",
          deliveredUser: [],
          deliveredPass: [],
          };

        this.receiveUser = this.receiveUser.bind(this);
        this.receivePassword = this.receivePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    receiveUser (e){
        this.setState({deliveredUser: e.target.value})
    }

    receivePassword (e){
        this.setState({deliveredPass: e.target.value})
    }

    handleLogin (){
        if (this.state.password == this.state.deliveredPass && this.state.user == this.state.deliveredUser){
            alert("Welcome");
            this.props.handleLogin(true);

        } else{
            alert("User or Password incorrect")
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        User: 
                        <input defaultValue={"User Name"} onChange={this.receiveUser}/>
                    </label>
                    <br/>
                    <label>
                        PassWord: 
                        <input defaultValue={"PassWord"} onChange={this.receivePassword}/>
                    </label>
                    <br/>
                    <button onClick={this.handleLogin}>Login</button>
                </form>
                
            </div>
        );
    }
}

export default Login;