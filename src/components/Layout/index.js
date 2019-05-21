import React from  'react';
import {NavLink,Link} from 'react-router-dom';

const Layout = (props)=>{
    return(
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/' activeClassName='active'>Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' activeClassName='active' className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/contact' activeClassName='active'>Contact <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/login' activeClassName='active'>Login <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/logout' activeClassName='active'>Logout <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/News' activeClassName='active'>News <span className="sr-only">(current)</span></NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className='container-fluid'>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;