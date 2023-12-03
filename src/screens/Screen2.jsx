import {View, Text, Pressable, StyleSheet} from 'react-native';

const Screen2 = ({navigation}) => {
  const handleBackwardPressed = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <Pressable style={styles.button} onPress={() => handleBackwardPressed()}>
        <Text style={styles.buttonText}>Go back</Text>
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

export default Screen2;
