import React from 'react';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

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

        
        <button className="btn btn-danger article-button"
                onClick={() => {swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then(function () {
                  destroyArticle(id);
                  swal(
                    'Deleted!',
                    'Your article has been deleted.',
                    'success'
                  )
                })
                }}><i className="fa fa-trash-o"/> Cancella
        </button>
      </div>
      }
    </div>
  )
};

export default Article