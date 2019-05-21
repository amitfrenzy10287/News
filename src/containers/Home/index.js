import React, {Component} from 'react';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import CardList from '../../components/CardList';

class Home extends Component{

    componentDidMount(){
        this.props.getAllData();
    }

    handleTodoDetail =(data)=>{
        this.props.history.push({
            pathname: '/todo',
            state: data
        });
    };

    render(){
        const {loading , result} = this.props;
        console.log('result',result);
        const self = this;
        const list =  result ? Object.keys(result).map((key)=>{
                return(
                    <CardList data={result[key]}
                    handleTodoDetail = {self.handleTodoDetail}
                    />
                );
        }): 'No Data Found';

        return (
            <div className='row mt-4'>
                {list}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllData : () => dispatch(actions.getAllData()),

    }
}

const mapStateToProps = state => {
    return {
        loading : state.app.loading,
        result : state.app.result
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);