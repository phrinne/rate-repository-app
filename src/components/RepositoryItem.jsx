import React from 'react';
import { View, StyleSheet, Image/*, Text as NativeText*/ } from 'react-native';
import theme from '../styles/theme';
import Text from "./Text";
import Badge from "./Badge";
import Stat from "./Stat";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive
  },
  header: {
    flexDirection: 'row',
    paddingBottom: theme.spacing.medium,
  },
  headerRows: {
    flex: 1,
    alignItems: 'flex-start', 
    flexGrow: 1,
  },
  headerRow: {
    marginBottom: theme.spacing.small,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  image: {
    width: theme.spacing.xlarge,
    height: theme.spacing.xlarge,
    borderRadius: theme.spacing.small,
    marginRight: theme.spacing.medium,
  },
});


const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl }) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={{ uri: `${ownerAvatarUrl}` }} />
          <View style={styles.headerRows}>
            <View style={styles.headerRow}>
              <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
            </View>
            <View style={styles.headerRow}>
              <Text color="textSecondary">{description}</Text>
            </View>
            <View style={styles.headerRow}>
              <Badge text={language} />
            </View>
          </View>
        </View>
        <View style={styles.stats}>
          <Stat name={"Stars"} number={stargazersCount} />
          <Stat name={"Forks"} number={forksCount} />
          <Stat name={"Reviews"} number={reviewCount} />
          <Stat name={"Rating"} number={ratingAverage} />
        </View>
      </View>
    );
  };
  
  export default RepositoryItem;