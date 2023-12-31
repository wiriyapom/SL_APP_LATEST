import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Loginpage from './Loginpage';

function Fristpage() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
    return <Loginpage />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Texts}>Welcome to Sign Languages Application</Text>
      <Image source={require('./images/handsign.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#437969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 30,
  },
  Texts:{
    fontSize:20
  }
});

export default Fristpage;
