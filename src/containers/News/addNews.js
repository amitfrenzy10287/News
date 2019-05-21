import React ,{Component} from 'react';
import {connect} from 'react-redux';
import NewsForm from '../../components/News/NewsForm';
import * as actions from '../../store/actions';
import {Redirect} from 'react-router-dom';


class addNews extends Component {
    state ={
        controls:{
            author:'testq12332',
            title:'test',
            description:'test',
            urlToImage:'test'
        }
    }

    handleChange =(e,inputType)=>{
        const data =[];
        data[inputType] = e.target.value;
        const controls = {...this.state.controls, ...data};
        this.setState({controls});
    }

    handleSubmit = async() =>{
        const { addNews,token } = this.props;
        await addNews(this.state.controls,token);
        this.props.history.push("/news");
    };

    render(){
        const {loading , error} = this.props;
        //let redirectToNews = '';
        let errorMessage = '';
        if(error!==''){
            errorMessage = <div className="alert alert-danger">{error}</div>;
        }
        return (
            <div>

                {errorMessage}
                <NewsForm data = {this.state.controls}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addNews : (news,token)=>dispatch(actions.addNews(news,token))
    }
}
const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        loading: state.news.loading,
        error: state.news.error
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(addNews);