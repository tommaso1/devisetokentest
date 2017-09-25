import React from 'react';

const Article = ({title, body, id, current_user, article_author_id, destroyArticle}) => {
    return (
        <div className="container">
            <h3 style={{gridRow:1, greedCol:1/4}}>{title}</h3>
            <p style={{gridRow:2, greedCol:1/3}}>{body}</p>
            {(current_user.role === 'admin' || current_user.id !== null && current_user.id === article_author_id) &&
                <div style={{gridRow:2, gridColumn:5}}>
                    <button   className="btn btn-danger grid-button" onClick={() => {destroyArticle(id)}}>Cancella</button>
                </div>
            }
        </div>
    )
};

export default Article