import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const screens: React.FC = () => {
  const [altura, setAltura] = useState('')
  const [massa, setMassa] = useState('')
  const [resultado, setResultado] = useState('')
  const [resultadotxt, setResultadotxt] = useState('')

  const calcular = () => {
    console.log("massa:"+massa+"altura:"+altura)
   
    const imc = (altura*altura) / massa;
    console.log('imc',imc)

    if(imc < 16){
      setResultadotxt("Magresa Grave")
    }else if((imc > 16) && (imc < 17)){
      setResultadotxt("Magresa Moderada")
    }else if((imc > 17)&&(imc < 18.5)){
      setResultadotxt("Magresa Leve")
    }else if((imc > 18.5)&&(imc < 25)){
      setResultadotxt("Saudável")
    }else if((imc > 25)&&(imc < 30)){
      setResultadotxt("Sobrepeso")
    }else if((imc > 30)&&(imc < 35)){
      setResultadotxt("Obesidade Grau I")
    }else if((imc > 35)&&(imc < 40)){
      setResultadotxt("Obesidade Grau II(severa)")
    }else if(imc > 40){
      setResultadotxt("Obesidade Grau III(mórbida)")
    }
    setResultado(imc)
  }

  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} value={massa} onChangeText={setMassa} />
        <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} value={altura} onChangeText={setAltura} />
      </View>
      <TouchableOpacity onPress={calcular} style={styles.button}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>
        {resultado}
      </Text>
      <Text style={[styles.resultado, {fontSize: 40}]}>{resultadotxt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#37436e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    entradas: {
      flexDirection:"row",
    },
    input: {
      height:80,
      textAlign:"center",
      color: 'lightgray',
      width:"50%",
      fontSize:50,
      marginTop:24,
    },
    text: {
      color:"#FFF",
      alignSelf:'center',
      fontSize: 20,
    },
    button: {
      backgroundColor:"#4F61A1",
      padding: 30,
      width:"100%",
    },
    resultado: {
      alignSelf:'center',
      color:'lightgray',
      fontSize: 20,
      padding: 15
    },
  });

export default screens;