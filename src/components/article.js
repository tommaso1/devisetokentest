import React from 'react';

const Article = ({title, body, id, current_user, article_author_id, destroyArticle}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            {(current_user.role === 'admin' || current_user.id !== null && current_user.id === article_author_id) && <button onClick={() => {destroyArticle(id)}}>Cancella</button>}
        </div>
    )
};

export default Article