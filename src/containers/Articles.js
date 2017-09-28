import React from 'react';
import {connect} from 'react-redux';
import {fetchArticles, destroyArticle} from './../actions'
import Article from './../components/article';
import ReduxSweetAlert, { swal, close } from 'react-redux-sweetalert';
//= ({articles, fetch, destroyArticle, current_user}) =>

class Articles extends React.Component  {

  componentDidMount(){
    this.props.fetch();
  }

  render(){
    let articles = this.props.articles || [];
    return (
      <div>
        {articles.map((article) => { return (
          <div key={article.id}>
            <Article
              title = {article.title}
              body = {article.body}
              id = {article.id}
              article_author_id={article.user_id}
              current_user={this.props.current_user}
              destroyArticle = {this.props.destroyArticle}
              swal={this.props.swal}
              close={this.props.close}
            />
          </div>)
        })}
      </div>
    );
  }

};




const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
    current_user : state.auth.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetch : () => {
      dispatch(fetchArticles());
    },
    destroyArticle : (id) => {
      dispatch(destroyArticle(id));
    },
    swal,
    close
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Articles);
