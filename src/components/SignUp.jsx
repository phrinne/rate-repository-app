import React from 'react';
import * as yup from 'yup';
import { View } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { componentStyles } from '../styles/theme';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, "Minimum length is 1")
    .max(30, "Maximum length is 30"),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Minimum length is 5')
    .max(50, 'Maximum length is 50'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], "Password confirmation needs to match")
});

const SignupForm = ({ onSubmit }) => {
  return (
    <View style={componentStyles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry />
      <Button onPress={onSubmit} title="Sign up" />
    </View>
  );
};

export const SignupFormContainer = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signUp({ username, password });
      console.log(data);
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignupFormContainer initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default SignUp;