import React from 'react';
import * as yup from 'yup';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../styles/theme';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive
  },
  component: {
    height: theme.spacing.componentHeight,
    borderRadius: theme.spacing.xsmall,
    paddingHorizontal: theme.spacing.medium
  },
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.textInverted,
  }
});

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
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.component} testID="usernameField" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.component} testID="passwordField" />
      <Pressable onPress={onSubmit} style={[styles.component, styles.button]}>
        <Text style={styles.buttonText} testID="submitButton">Sign in</Text>
      </Pressable>
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