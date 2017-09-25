import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';


class Nav extends React.Component{

      render(){
          return (
              <nav className={'navbar navbar-default '+ this.props.className}>
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <Link className="navbar-brand" to="/">Prova react-redux</Link>
                      </div>
                      <ul className="nav navbar-nav">
                          <li className={this.props.match.url === '/' ? 'active': ''}>
                              <Link  to="/">Home</Link>
                          </li>
                          {this.props.userId !== null &&
                          <li className={this.props.match.url === '/new-article' ? 'active': ''}>
                              <Link to="/new-article">Crea un nuovo articolo</Link>
                          </li>}
                          {this.props.userId === null &&
                          <li className={this.props.match.url === '/login' ? 'active': ''}>
                              <Link to="/login">Log-In</Link>
                          </li>}

                      </ul>
                  </div>
              </nav>
          )
      }
}

const mapStateToProps = state => {
    return {
        userId : state.auth.user.id
    }
};



export default  withRouter(connect(mapStateToProps)(Nav));
