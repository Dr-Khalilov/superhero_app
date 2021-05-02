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
        <Field name='nickName' />
        <Field name='realName' />
        <Field name='originDescription' />
        <Field name='catchPhrase' />
        <Field name='powers' />
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
