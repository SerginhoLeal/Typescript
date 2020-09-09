import React from 'react'
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Pages/home';
import Settings from './Pages/settings';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>{/* StatusBar para tirar a coisa lá em cima, esqueci o nome*/}
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Settings" component={Settings}/>
        {/* A primeira pagina que irá aparecer, será o Settings, se quiser trocar é só colocar Home em primeiro e o settings em segundo */}
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*

  Eu não sei o Typescript muito bem, mas não muda muita coisa
  do javascript para o typescript

  Se precisar de ajuda é só chamar (31)9-7556-4133

*/