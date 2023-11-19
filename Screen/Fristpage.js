import { StyleSheet, Text, View, Image } from 'react-native';
import { AppRegistry } from 'react-native';
import { useEffect } from 'react';
import Loginpage from './Loginpage';

export default function Fristpage({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Loginpage); 
          }, 5000);
          return () => clearTimeout(timer);
        }, [navigation]);
    
    return (
    <View style={styles.container}>
      <Text>Welcome to Sign Languags Appication</Text>
      <Image source={require("./images/handsign.png")} style={styles.image}
      />
    </View>
  );
}

AppRegistry.registerComponent(Loginpage ,() => Fristpage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    marginBottom: 30
  }
});

