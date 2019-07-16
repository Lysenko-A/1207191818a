import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const ru = require('date-fns/locale/ru/index');

const CommentsMessage = (props) => {
  const { messages } = props;
  return (
    messages ?
      messages.map(item => (
        <div className='comments__message' key={item.id}>
          <div className='comments__message__head'>
            <strong className='comments__message__name'>{item.author}</strong>
            <time className='comments__message__date' dateTime={format(item.date, 'YYYY-MM-DD')}>
              {format(item.date, 'DD MMMM YYYY', { locale: ru })}
            </time>
          </div>
          <div className='comments__message__text'>
            <p>
              {item.review}
            </p>
          </div>
        </div>
      ))
      :
      <div>Нет отзывов</div>
  );
};

CommentsMessage.propTypes = {
  data: PropTypes.array,
};


export default CommentsMessage;
