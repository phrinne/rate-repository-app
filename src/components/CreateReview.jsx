import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { componentStyles } from '../styles/theme';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from "react-router-native";

const initialValues = {
  ownername: '',
  reponame: '',
  rating: '',
  review: '',
};

const validationSchema = yup.object().shape({
  ownername: yup
    .string()
    .required('Owner name is required'),
  reponame: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Minimum value is 0')
    .max(100, 'Maximum value is 100'),
  review: yup
    .string()
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={componentStyles.container}>
      <FormikTextInput name="ownername" placeholder="Repository owner name" />
      <FormikTextInput name="reponame" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review" />
      <Button onPress={onSubmit} title="Create a review" />
    </View>
  );
};

const ReviewContainer = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { ownername, reponame, rating, review } = values;
    try {
      const data = await createReview({
        repositoryName: reponame,
        ownerName: ownername,
        rating: Number(rating),
        text: review,
      });
      const idToGo = data.createReview.repository.id;
      history.push(`/repos/${idToGo}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewContainer 
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema} 
    />
  );
};

export default CreateReview;