import { Formik, Form, Field } from 'formik';

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
    powers: [],
    images: [],
  };
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form encType='multipart/form-data' method='post'>
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
          name='images'
          type='file'
          multiple
          accept='image / jpeg, image / png'
        />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default HeroForm;
