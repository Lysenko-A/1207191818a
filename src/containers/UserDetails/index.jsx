import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo';
import Comments from '../../components/Comments';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { addReviewAction, changedCommentsViewAction } from './userDetailsAction';
import TextAreaField from '../../components/TextAreaField';

const validationSchema = yup.object().shape({
  message: yup
    .string()
    .min(2, 'Короткое сообщение')
    .required('Поле обезательно для заполнения'),
});

class User extends Component {
  onSubmit = (values, { setSubmitting, resetForm }) => {
    const { addReview } = this.props;
    const data = {
      id: Math.floor(Math.random() * 1000),
      author: 'Гость',
      date: new Date(),
      review: values.message,
    };
    addReview(data);
    resetForm({ message: '' });
    setSubmitting(false);
  };

  render() {
    const {
      user: { userInfoData, userService, comments, filterComments },
      changedCommentsView,
    } = this.props;
    return (
      <>
        <UserInfo userInfoData={userInfoData} userService={userService} />
        <Comments
          data={comments}
          filterComments={changedCommentsView}
          showComments={filterComments}
        />
        <div className='form_comment__wrap'>
          <div className='container'>
            <Formik
              onSubmit={this.onSubmit}
              initialValues={{ message: '' }}
              validationSchema={validationSchema}
              render={props => {
                const { handleSubmit } = props;

                return (
                  <form onSubmit={handleSubmit}>
                    <Field name='message' component={TextAreaField} />
                    <div className='text-center'>
                      <button type='submit' className='form_comment__btn_send'>
                        Написать консультанту
                      </button>
                    </div>
                  </form>
                );
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  addReview: PropTypes.func,
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  {
    addReview: addReviewAction,
    changedCommentsView: changedCommentsViewAction,
  }
)(User);
