import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet

  } from 'react-native';
  import Conversor from './src/Conversor';
  
  class App extends Component{
    //https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=a6768c997429e8e0c3f7
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL"  />
      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default App;


