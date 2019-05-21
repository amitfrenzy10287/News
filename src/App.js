import React, { Component } from 'react';
import Home from  './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import todoDetail from './containers/ToDoDetails';
import Contact from './containers/Contact';
import News from './containers/News';
import addNews from './containers/News/addNews';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Layout from './components/Layout';
import {connect } from 'react-redux';
import Logout from './containers/Logout';

class App extends Component {
  render() {
    let routes =(
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/todo" component={todoDetail} />
          <Route  path="/login" component={Login} />
          <Route  path="/news" component={News} />
          <Route  path="/addNews" component={addNews} />
          <Route  path="/contact" component={Contact} />
          <Redirect to="/" />
      </Switch>
    );
    if(this.props.isAuthenticated){
        routes =(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/about" component={About} />
                <Route  path="/todo" component={todoDetail} />
                <Route  path="/contact" component={Contact} />
                <Route  path="/logout" component={Logout} />
                <Route  path="/news" component={News} />
                <Route  path="/addNews" component={addNews} />

                <Redirect to="/" />
            </Switch>
        )
    }

    return (
      <Layout>
          {routes}
      </Layout>
    );
  }
}
const mapStateToProps= state =>{
  return{
      isAuthenticated: state.auth.token!==''
  }
};

export default withRouter(connect(mapStateToProps,null)(App));
