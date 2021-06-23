import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SigninFormContainer } from '../../components/SignIn';
import * as yup from 'yup';

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

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SigninFormContainer initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />);
      fireEvent.changeText(getByTestId('usernameField'), 'pauli');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'pauli',
          password: 'password',
        });
      });
    });
  });
});