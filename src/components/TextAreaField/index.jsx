import React, { PureComponent } from 'react';

class TextAreaField extends PureComponent {
  handleChange = e => {
    const {
      form: { setFieldValue },
      field: { name },
    } = this.props;
    setFieldValue(name, e.target.value);
  };

  handleKeyPress = e => {
    const {
      form: { submitForm },
      field: { name, value },
    } = this.props;
    if (e.ctrlKey) {
      submitForm({
        [name]: value,
      });
    }
  };

  render() {
    const {
      field: { name, value },
      form: { errors },
    } = this.props;
    return (
      <div className='form_comment__row_field'>
        <textarea
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={value}
          className='form_comment__field form_comment__field--textarea'
        />
        {errors && errors[name] && <div className='form_comment__field--error'>{errors[name]}</div>}
      </div>
    );
  }
}

export default TextAreaField;
