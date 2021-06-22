import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <>
    <AppBar />
    <View style={styles.container}>
      <RepositoryList />
    </View>
    </>
  );
};

export default Main;
/*import React from "react";
import Text from "./Text";

const Main = () => (
	<>
		<Text>Simple text</Text>
		<Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
		<Text fontWeight="bold" fontSize="subheading">
			Bold subheading
		</Text>
		<Text color="textSecondary">Text with secondary color</Text>
	</>
);

export default Main;*/
