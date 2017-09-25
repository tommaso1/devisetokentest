import React from 'react';

const Article = ({title, body, id, current_user, article_author_id, destroyArticle}) => {
    return (
        <div className="article">
            <div className="article-title">
                <h3>
                    {title}
                </h3>
            </div>
            <div className="article-body">
                <p>{body}</p>
            </div>
            {(current_user.role === 'admin' || current_user.id !== null && current_user.id === article_author_id) &&
                <div className="article-button" >
                    <button   className="btn btn-danger article-button" onClick={() => {destroyArticle(id)}}>Cancella</button>
                </div>
            }
        </div>
    )
};

export default Article