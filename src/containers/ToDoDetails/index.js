import React,{ Component } from 'react';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Todo extends Component {

    componentDidMount(){
       const id = this.props.history.location.state.id;
       this.props.getDataById(id);

    }

    render() {
        //const {userId,title} = this.props.history.location.state;
       /* const title = this.props.history.location.state && this.props.history.location.state.title?
            this.props.history.location.state.title:'';
        const userId = this.props.history.location.state && this.props.history.location.state.userId?
            this.props.history.location.state.userId:'';*/
        const {userId,title} = this.props.resultDetail;

        return (
            <div>
                <div>{userId}</div>
                <div>{title}</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getDataById : (id) =>dispatch(actions.getDatabyId(id))
    }
}

const mapStateToProps = state =>{
    return {
        resultDetail : state.app.resultDetail,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);