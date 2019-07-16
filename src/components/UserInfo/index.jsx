import React from 'react';
import UserDesc from './UserDesc/UserDesc';
import UserService from './UserService/UserService';

const UserInfo = ({ userInfoData, userService }) => (
  <div className='container'>
    <UserDesc userInfoDate={userInfoData} clasess='mt-20' />
    <UserService userService={userService} />
  </div>
);

export default UserInfo;
