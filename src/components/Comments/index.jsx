import React from 'react';
import PropTypes from 'prop-types';
import CommentsMessage from './CommentsMessage';
import likeIcon from '../../assets/images/likeIcon.png';
import commentIcon from '../../assets/images/commentIcon.png';

const Comments = ({ data }) => (
  <div className='container'>
    <div className='comments__head'>
      <div className='comments__head__group_btn'>
        <button className='active'>Последние отзывы</button>
        <button>Все отзывы</button>
      </div>
      <div>
        <span className='comments__head__icon'>
          <img src={likeIcon} alt='icon like' />
          131
        </span>
        <span className='comments__head__icon'>
          <img src={commentIcon} alt='icon comment' />
          {data.length}
        </span>
      </div>
    </div>
    <CommentsMessage messages={data} />
  </div>
);

Comments.propTypes = {
  data: PropTypes.array,
};

export default Comments;
