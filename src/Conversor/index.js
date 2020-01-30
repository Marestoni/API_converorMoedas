import React, {Component} from 'react';
import {
    View,
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido:0
        }

        this.converter = this.converter.bind(this);

    }
    converter(){
        
    }
    
    render(){
        const {moedaA , moedaB} = this.props
        return(
            <View style={styles.container}>

                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
                <TextInput 
                    placeholder="Valor a ser convertido:"
                    style={styles.areaInput}
                    onChangeText={(moedaB_valor)=>this.setState({moedaB_valor})}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>
                    {this.state.valorConvertido}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
    },
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000'
    },
    areaInput:{
        width:280,
        height:45,
        backgroundColor:'#CCC',
        textAlign:'center',
        fontSize:20,
        marginTop:15,
        color:'#000',
        borderRadius: 5,        
    },
    botaoArea:{
        width:150,
        height:45,
        backgroundColor: '#FF0000',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    botaoTexto:{
        fontSize:17,
        fontWeight:'bold',
        color:'#FFF'
    },
    valorConvertido:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        marginTop:15
    }
  })
export default Conversor;