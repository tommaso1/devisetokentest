import React from 'react';

const Article = ({title, body, current_user_id}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
};

export default Article