import { StyleSheet, Text, View , TextInput, TouchableOpacity, ImageBackground, Button, Alert,} from 'react-native';

// const MyButton = () => {
//   const loginbtn = () =>{
    
//   };
// }

export default function Loginpage() {
    return (
    <View style={styles.container}>
      <Text>Login ka</Text>
      <Text>Username or Email</Text>
      <Text>Password</Text>
      {/* <Button title='Sign in' color="" onPress={() => Alert.alert('Seccess')}/>
      <Button>Sign up</Button> */}
      <Text>Reset Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  
});