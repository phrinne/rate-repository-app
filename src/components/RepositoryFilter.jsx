import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme, { componentStyles } from '../styles/theme';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  bottomMargin: {
    marginBottom: theme.spacing.small,
  },
});

const RepositoryFilter = ({ searchValue, searchCb }) => {

  return (
    <View style={[componentStyles.container, styles.bottomMargin]}>
      <TextInput
        onChangeText={value => searchCb(value)}
        value={searchValue}
        style={componentStyles.component}
        placeholder="Filter..."
      />
    </View>
  );
};

export default RepositoryFilter;