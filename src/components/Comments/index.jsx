import React from 'react';
import PropTypes from 'prop-types';
import CommentsMessage from './CommentsMessage';
import cx from 'classnames';
import likeIcon from '../../assets/images/likeIcon.png';
import commentIcon from '../../assets/images/commentIcon.png';
import { ALL_COMMENTS, LAST_COMMENTS } from '../../containers/UserDetails/userDetailsConstants';

const Comments = ({ data, filterComments, showComments }) => {
  const lastComments = data.slice(data.length - 3, data.length);
  return (
    <div className='container'>
      <div className='comments__head'>
        <div className='comments__head__group_btn'>
          <button
            className={cx({ active: showComments === LAST_COMMENTS })}
            onClick={() => filterComments(LAST_COMMENTS)}
          >
            Последние отзывы
          </button>
          <button
            className={cx({ active: showComments === ALL_COMMENTS })}
            onClick={() => filterComments(ALL_COMMENTS)}
          >
            Все отзывы
          </button>
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
      {showComments === LAST_COMMENTS ? (
        <CommentsMessage messages={lastComments} />
      ) : (
        <CommentsMessage messages={data} />
      )}
    </div>
  );
};

Comments.propTypes = {
  data: PropTypes.array,
};

export default Comments;
