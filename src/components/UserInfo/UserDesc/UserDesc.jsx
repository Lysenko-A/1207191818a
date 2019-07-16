import React from 'react';
import defaultAvatar from '../../../assets/images/default-user-ava.png';
import cx from 'classnames';
import PropTypes from 'prop-types';

const UserDesc = ({ userInfoDate = {}, clasess = '' }) => {
  const { avatar, name, position, description } = userInfoDate;
  return (
    <div className={cx('user_wrap', clasess)}>
      <div className="user__wrap_avatar">
        {avatar ? (
          <img className="user__avatar" src={avatar.src} alt={avatar.alt}/>
        ) : (
          <img className="user__avatar" src={defaultAvatar} alt="avatar user"/>
        )}
      </div>
      <div className="user__info">
        <div className="user__info__name">{name}</div>
        <div className="user__info__position">{position}</div>
        {description &&
        <div className="user__info__description">
          <p>{description}</p>
        </div>
        }
      </div>
    </div>
  );
};

UserDesc.propTypes = {
  userInfoDate: PropTypes.shape({
    avatar: PropTypes.object,
    name: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  }),
  clasess: PropTypes.string,
};

export default UserDesc;