import React from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';

import ItemSeparator from './ItemSeparator';
import Text from './Text';
import Button from './Button';

import { format } from 'date-fns';
import theme, { componentStyles } from '../styles/theme';
import { useHistory } from 'react-router';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  columns: {
    flexDirection: 'row',
  },
  rows: {
    flex: 1,
    alignItems: 'flex-start', 
    flexGrow: 1,
  },
  bottomMargin: {
    marginBottom: theme.spacing.xsmall,
  },
  topMargin: {
    marginTop: theme.spacing.medium,
  },
  rightMargin: {
    marginRight: theme.spacing.medium,
  },
  rating: {
    width: theme.spacing.xlarge,
    height: theme.spacing.xlarge,
    borderRadius: theme.spacing.xlarge/2,
    borderWidth: 2,
    marginRight: theme.spacing.medium,
    justifyContent: 'center',
    alignItems:'center',
    borderColor: theme.colors.primary,
  },
  ratingText: {
    fontSize: theme.fontSizes.tabItem,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  action: {
    flex: 1,
  }
});

const RepositoryReview = ({ review, showActions, refetch }) => {
  const date = new Date(review.createdAt);
  const formattedDate = format(date, "dd.MM.yyyy");
  const history = useHistory();
  const repoID = review.repository.id;
  const reviewID = review.id;
  const [deleteReview] = useDeleteReview();

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel pressed") },
        { text: "Delete", onPress: async () => {
          console.log("Delete Pressed");
          console.log("DELETE", reviewID);
          await deleteReview(reviewID);
          refetch();
        }},
      ]
    );
  };

  const actions = () => {
    return (
      <View style={[styles.columns, styles.topMargin]}>
        <View style={[styles.action, styles.rightMargin]}>
          <Button title="View repository" onPress={() => history.push(`/repos/${repoID}`)} />
        </View>
        <View style={styles.action}>
          <Button title="Delete review" negative={true} onPress={handleDelete} />
        </View>
      </View>
    );
  };

  const title = showActions?review.repository.fullName:review.user.username;

  return (
    <View style={componentStyles.container}>
      <View style={styles.columns}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.rows}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.bottomMargin}>{title}</Text>
          <Text color="textSecondary" style={styles.bottomMargin}>{formattedDate}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {showActions && actions()}
    </View>
  );
};

const RepositoryReviews = ({ reviews, onEndReach, showActions, refetch }) => {
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryReview review={item} showActions={showActions} refetch={refetch} />}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryReviews;