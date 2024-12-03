import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Importación de las páginas
import Principal from './paginas/principal';
import Sesion from './paginas/sesion';
import Registro from './paginas/registro';
import Vender from './paginas/vender';
import Perfil from './paginas/perfil';
import Buscar from './paginas/buscar';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'), // Carga de fuente personalizada
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="principal"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="principal" component={Principal} />
        <Stack.Screen name="sesion" component={Sesion} />
        <Stack.Screen name="registro" component={Registro} />
        <Stack.Screen name="vender" component={Vender} />
        <Stack.Screen name="perfil" component={Perfil} />
        <Stack.Screen name="buscar" component={Buscar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
