import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Nav extends React.Component{

      render(){
          return (
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <a className="navbar-brand" href="/">Prova react-redux</a>
                      </div>
                      <ul className="nav navbar-nav">
                          <li className={this.props.match.url === '/' ? 'active': ''}>
                              <a href="/">Home</a>
                          </li>
                          {this.props.userId !== null &&
                          <li className={this.props.match.url === '/new-article' ? 'active': ''}>
                              <a href="/#/new-article">Crea un nuovo articolo</a>
                          </li>}
                          {this.props.userId === null &&
                          <li className={this.props.match.url === '/login' ? 'active': ''}>
                              <a href="/#/login">Log-In</a>
                          </li>}

                      </ul>
                  </div>
              </nav>
          )
      }
};

const mapStateToProps = state => {
    return {
        userId : state.auth.user.id
    }
};



export default  withRouter(connect(mapStateToProps)(Nav));
