import { Formik, Form, Field } from 'formik';
import styles from './styles/HeroForm.module.scss';

const HeroForm = props => {
  const { submitHandler } = props;
  const onSubmit = (values, formikBag) => {
    submitHandler(values);
    formikBag.resetForm();
  };
  const values = {
    nickName: '',
    realName: '',
    originDescription: '',
    catchPhrase: '',
    powers: [''],
    images: [''],
  };
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form
        className={styles.pageContainer}
        encType='multipart/form-data'
        method='post'
      >
        <Field name='nickName' placeholder='Nickname' required />
        <Field name='realName' placeholder='Real name' required />
        <Field
          name='originDescription'
          placeholder='Origin description'
          required
        />
        <Field name='catchPhrase' placeholder='Catch Phrase' required />
        <Field name='powers' placeholder='Superpowers' />
        <Field
          className={styles.imgFieldStyles}
          name='images'
          type='file'
          multiple
          accept='image / jpeg, image / png'
        />
        <button className={styles.btnStyles} type='submit'>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default HeroForm;
