import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive
  },
  component: {
    height: theme.spacing.componentHeight,
    marginBottom: theme.spacing.small,
    borderRadius: theme.spacing.xsmall,
    paddingHorizontal: theme.spacing.medium
  },
  outlinedComponent: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
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

const SigninForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={{...styles.component, ...styles.outlinedComponent}} />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry style={{...styles.component, ...styles.outlinedComponent}} />
      <Pressable onPress={onSubmit} style={{...styles.component, ...styles.button}}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;