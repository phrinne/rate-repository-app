import React, { useState } from "react";
import { View, Pressable, StyleSheet } from 'react-native';
//import { Picker } from "@react-native-picker/picker";
import { /*Menu, Provider, Paragraph, Button,*/ Portal, Dialog, RadioButton } from 'react-native-paper';
//import Button from './Button';
import Text from './Text';
import theme/*, { componentStyles }*/ from '../styles/theme';

const styles = StyleSheet.create({
  anchor: {
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundActive,
    marginBottom: theme.spacing.small,
    paddingVertical: 20,
  },
  anchorText: {
    fontSize: theme.fontSizes.subheading,
  }
});

const labels = {
  latest: "Latest reviews",
  highest: "Highest review score",
  lowest: "Lowest review score",
};

const RepositorySorter = ({ sortValue, sortCb }) => {
	const [visible, setVisible] = useState(false);
  
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleChange = (value) => {
    if(value) {
      //setSortOpt(value);
      sortCb(value);
    }
    closeMenu();
  };

  return (
    <View>
      <Pressable onPress={openMenu}>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Sorting: {labels[sortValue]}</Text>
        </View>
      </Pressable>
      <Portal>
        <Dialog visible={visible} onDismiss={() => handleChange()}>
          <Dialog.Title>Sort repositories</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group onValueChange={(v) => handleChange(v)} value={sortValue}>
              <RadioButton.Item label={labels["latest"]} value="latest" />
              <RadioButton.Item label={labels["highest"]} value="highest" />
              <RadioButton.Item label={labels["lowest"]} value="lowest" />
            </RadioButton.Group>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default RepositorySorter;

  /*const handleClose = (itemValue, itemIndex) => {
    //setSelectedSort(itemValue);
    console.log('handing close');
    setSort(sortOpt);
    closeMenu();
  };*/

  /*
<Dialog.Actions>
            <Button onPress={handleClose}>Sort</Button>
          </Dialog.Actions>
  */
  /*
  <View>
                <Text>Latest</Text>
                <RadioButton value="latest" />
              </View>
              <View>
                <Text>Highest</Text>
                <RadioButton value="highest" />
              </View>
              <View>
                <Text>Lowest</Text>
                <RadioButton value="lowest" />
              </View>
  */
  /*
    <RadioButton
              value="latest"
              status={ sortOpt === 'latest' ? 'checked' : 'unchecked' }
              onPress={() => setSortOpt('latest')}
            />
            <RadioButton
              value="highest"
              status={ sortOpt === 'highest' ? 'checked' : 'unchecked' }
              onPress={() => setSortOpt('highest')}
            />
            <RadioButton
              value="lowest"
              status={ sortOpt === 'lowest' ? 'checked' : 'unchecked' }
              onPress={() => setSortOpt('lowest')}
            />
  */

  /*const anchor = () => {
    return (
      <Pressable onPress={openMenu}>
        <View style={styles.anchor}>
          <Text style={styles.anchorText}>Open menu</Text>
        </View>
      </Pressable>
      
    );
  };

  return (
      <View>
        <Menu visible={visible} onDismiss={handleClose} anchor={anchor()}>
          <Menu.Item onPress={() => setSelectedSort("latest")} title="Latest first" />
          <Menu.Item onPress={() => setSelectedSort("highest")} title="Highest rated first" />
          <Menu.Item onPress={() => setSelectedSort("lowest")} title="Lowest rated first" />
        </Menu>
      </View>
  );*/

/*const [selectedSort, setSelectedSort] = useState("latest");
  const pickerRef = useRef();

  const open = () => pickerRef.current.focus();
  const close = () => pickerRef.current.blur();

  const handleChange = (itemValue, itemIndex) => {
    setSelectedSort(itemValue);
    setSort(itemValue);
  };

	return (
		<Picker selectedValue={selectedSort} onValueChange={handleChange} ref={pickerRef} mode={"dropdown"}>
			<Picker.Item label="Latest first" value="latest" />
			<Picker.Item label="Highest rated first" value="highest" />
      <Picker.Item label="Lowest rated first" value="lowest" />
		</Picker>
	);*/