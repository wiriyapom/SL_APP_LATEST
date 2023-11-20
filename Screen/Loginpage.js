import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.logo}>เข้าสู่ระบบ</Text>
      <View style={styles.inputView} >
        <TextInput name='Username or Email'
          style={styles.inputText}
          placeholder="Username or Email.."
          placeholderTextColor="#000"
          onChangeText={text => setEmail(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#000"
          onChangeText={text => setPassword(text)} />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup}>สมัครเข้าใช้งาน</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>ลืมรหัสผ่าน?</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    backgroundColor: '#fff',
    
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#456",
    marginBottom: 30,
    
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    fontSize: 11,
    color: "black"
  },
  forgot: {
    color: "black",
    fontSize: 11
  },
  signup: {
    fontWeight: "bold",
    color: "darkorange",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FF7A00",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  loginText: {
    color: "white",
    fontSize: 11 
  },
  card: {
    backgroundColor:"#CEF7EB",
    borderRadius:15,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    
  }

});
export default Loginpage;