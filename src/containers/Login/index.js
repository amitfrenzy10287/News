import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {Redirect} from 'react-router-dom';
class Login extends Component{

   state ={
       controls : {
           userName:'',
           password:''
       }
   };

   handleChange=(e,type)=> {
       const data = [];
       data[type] = e.target.value;
       const controls = {...this.state.controls, ...data};
       this.setState({controls});
   };

   handleSubmit =()=>{
        const {token} = this.props;
        this.props.login(this.state.controls);
        if(token){
            console.log('token',token);
        }
   };

    render(){
        const {loginMessage,token} = this.props;
        let redirect = token ? <Redirect to="/news" /> : '';
        return(
            <div className='col-md-4'>
                {loginMessage ? loginMessage : ''}
                {redirect}
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"
                               value={this.state.controls.username}
                               onChange={(e)=>this.handleChange(e, 'username')}
                               className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            value={this.state.controls.password}
                            onChange={(e)=>this.handleChange(e, 'password')}
                            type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <button type="button"
                            onClick={()=>this.handleSubmit()}
                            className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loginMessage: state.auth.loginMessage
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        login: (data)=>dispatch(actions.login(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);