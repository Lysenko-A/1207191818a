import { ADD_REVIEW_SUCCESS } from './userDetailsConstants';
import userAvatar from '../../assets/images/avatarUser.png';

const initialState = {
  userInfoData: {
    avatar: {
      src: userAvatar,
      alt: 'avatar user',
    },
    name: 'Вероника Ростова',
    position: 'Менеджер по продажам',
    description: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
  },
  userService: {
    list: [
      {
        id: 1,
        title: 'Ручное бронирование',
        value: 11,
        ratio: 90,
      },
      {
        id: 2,
        title: 'Пакетные туры',
        value: 3,
        ratio: 20,
      },
      {
        id: 3,
        title: 'Отели',
        value: 1,
        ratio: 15,
      },
    ],
    total: 15,
  },
  comments: [
    {
      id: 1,
      author: 'Самуил',
      date: new Date('october 13, 2011'),
      review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ',
    },
    {
      id: 2,
      author: 'Лилия Семёновна',
      date: new Date('october 14, 2011'),
      review:
        'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
    },
    {
      id: 3,
      author: 'Лилия Семёновна',
      date: new Date('october 14, 2011'),
      review:
        'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
    },
  ],
};

export default function userDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };
    default:
      return state;
  }
}
