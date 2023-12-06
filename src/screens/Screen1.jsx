import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from '@react-native-firebase/database';

const reference = firebase
  .app()
  .database('https://pillmaster-9e7a7-default-rtdb.firebaseio.com/')
  .ref('/medication/')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
// console.log('hello world');

const Screen1 = ({navigation, route}) => {
  const handleForwardPressed = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Ionicons name="alert" size={16} color={'green'} />
      <Pressable style={styles.button} onPress={() => handleForwardPressed()}>
        <Text style={styles.buttonText}>Go forward</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 100,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
});

export default Screen1;
