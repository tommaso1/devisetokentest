import React from 'react';
import {connect} from 'react-redux';
import {fetchArticles, destroyArticle} from './../actions'
import Article from './../components/article';


const Articles = ({articles, fetch,destroyArticle , current_user_id}) => {
    articles = articles || [];
    return (
        <div>
            <button onClick={()=>{fetch()}}>fetch</button>
            <button onClick={()=>{destroyArticle(18)}}>Cancella l' articolo 18</button>
            <div className="row">
                {articles.map((article, i) => { return (
                    <div key={i} className="col-md-10 col-md-offset-1">
                        <Article title={article.title} body={article.body} current_user_id={current_user_id}/>
                    </div>)
                })}
            </div>
        </div>
    );
};




const mapStateToProps = state => {
    return {
        articles: state.articles.articles,
        current_user_id : state.auth.user.id
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
