import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ItemSeparator from './ItemSeparator';
import Text from './Text';
import { format } from 'date-fns';
import theme, { componentStyles } from '../styles/theme';

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
  }
});

const RepositoryReview = ({ review }) => {
  const date = new Date(review.createdAt);
  const formattedDate = format(date, "dd.MM.yyyy");

  return (
    <View style={componentStyles.container}>
      <View style={styles.columns}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.rows}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.bottomMargin}>{review.user.username}</Text>
          <Text color="textSecondary" style={styles.bottomMargin}>{formattedDate}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryReviews = ({ reviews, onEndReach }) => {
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryReview review={item} />}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryReviews;