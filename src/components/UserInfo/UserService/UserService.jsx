import React from 'react';
import PropTypes from 'prop-types';

const UserService = (props) => {
  const { list, total } = props.userService;
  return (
    <div className="user_service">
      <div className="user_service__title user_service__title--right">Услуг</div>
      {
        list ? <>
            <ul className="user_service__list">
              {list.map(item => (
                <li className="user_service__list__item" key={item.id}>
                  <div className="user_service__list__item__title">
                    {item.title}
                    <div className="user_service__list__item__title__bg" style={{width: `${item.ratio}%`}}/>
                  </div>
                  <div className="user_service__list__item__value">{item.value}</div>
                </li>
              ))}
            </ul>
            <div className="user_service__total">
              <div className="user_service__total__title">Всего</div>
              <div className="user_service__list__item__value user_service__total__value">{total}</div>
            </div>
          </>
          :
          <div>
            Список пуст
          </div>
      }
    </div>
  )
};

UserService.propTypes = {
  list: PropTypes.array,
  total: PropTypes.number,
};

export default UserService;