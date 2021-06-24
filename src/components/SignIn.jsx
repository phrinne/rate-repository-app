import React from 'react';
import * as yup from 'yup';
import { /*Text, Pressable,*/ View, /*StyleSheet*/ } from 'react-native';
import Button from './Button';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { componentStyles } from '../styles/theme';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SigninForm = ({ onSubmit }) => {
  return (
    <View style={componentStyles.container}>
      <FormikTextInput name="username" placeholder="Username" style={componentStyles.component} testID="usernameField" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={componentStyles.component} testID="passwordField" />
      <Button onPress={onSubmit} title="Sign in" testID="submitButton" />
    </View>
  );
};

export const SigninFormContainer = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  /*return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );*/
  return (
    <SigninFormContainer initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />
  );
};

export default SignIn;