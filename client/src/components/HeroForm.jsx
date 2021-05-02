import { Formik, Form, Field } from 'formik';

const HeroForm = props => {
  const onSubmit = (values, formikBag) => {};
  const values = {
    nickName: '',
    realName: '',
    originDescription: '',
    catchPhrase: '',
    superpowers: [''],
    images: [''],
  };
  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form encType='multipart/form-data' method='post'>
        <Field name='nickName' />
        <Field name='realName' />
        <Field name='originDescription' />
        <Field name='catchPhrase' />
        <Field name='superpowers' />
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
