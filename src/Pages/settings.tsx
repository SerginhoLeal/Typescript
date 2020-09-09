import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native"

const teste: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.body}>
      <Text style={{color:'#fff'}} >Settings Screen</Text>
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default teste;