import React from 'react';
import {connect} from 'react-redux';
import {fetchArticles, destroyArticle} from './../actions'
import Article from './../components/article';


const Articles = ({articles, fetch, destroyArticle, current_user}) => {
    articles = articles || [];
    
    return (
        <div>
            <button onClick={()=>{fetch()}}>fetch</button>
            {current_user.id !== null && <a href={'/#/new-article'}>Nuovo articolo</a>}
            <div className="row">
                {articles.map((article) => { return (
                    <div key={article.id} className="col-md-10 col-md-offset-1">
                        <Article
                            title = {article.title}
                            body = {article.body}
                            id = {article.id}
                            article_author_id={article.user_id}
                            current_user={current_user}
                            destroyArticle = {destroyArticle}
                        />
                    </div>)
                })}
            </div>
        </div>
    );
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
        }
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Articles);
