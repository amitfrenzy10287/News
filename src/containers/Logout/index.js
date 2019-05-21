import React from 'react';
import {connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component{

    componentDidMount(){
        if( !this.props.isAuthenticated) {
            this.props.history.location({
                path:'/login'
            });
        }
        this.props.logout();
    }

    render(){
        const { isAuthenticated } = this.props;
        let redirect = !isAuthenticated ? <Redirect to="/login" /> : '';
        return(
            <div>{ redirect }</div>
        );
    }
}

const mapDispatchToProps =dispatch=>{
    return{
        logout: ()=>dispatch(actions.logout())
    }
};

const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token!==''
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

