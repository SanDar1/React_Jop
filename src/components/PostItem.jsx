import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.body.id}. {props.body.title}
        </strong>
        <div>
          {props.body.description}
        </div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;