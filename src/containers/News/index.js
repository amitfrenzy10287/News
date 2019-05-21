import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import NewsDetails from '../../components/NewsDetails';
import * as actions from "../../store/actions";

class News extends Component{

    componentDidMount(){
        const { getNews, token } = this.props;
        getNews(token);
    }

    render(){

        const { news } = this.props;
        const newsList = news ? Object.keys(news).map((key)=>{
            return(
              <NewsDetails {...news[key]} />
            );
        }):'No record found';

        return(
            <div className="container-fluid">
                <Link className="btn btn-primary" to='/addNews'>Add news </Link>
            <table className="table table-hover table-dark m-2">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">UrlToImage</th>
                    <th scope="col">Published_at</th>
                    <th scope="col">Created_at</th>
                    <th scope="col">PublishedDate</th>
                </tr>
                </thead>
                <tbody>
                { newsList }
                </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        token: state.auth.token,
        news: state.news.allNews
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        getNews: (token) => dispatch(actions.getNews(token))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(News);