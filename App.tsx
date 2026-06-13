import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './screens/MenuScreen';
import CoffeeDetailScreen from './screens/CoffeeDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Menu"
        screenOptions={{
          headerStyle: { backgroundColor: '#4a3f35' }, // Encabezado color café oscuro
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: 'Menú - Café Aroma' }} 
        />
        <Stack.Screen 
          name="Detalle" 
          component={CoffeeDetailScreen} 
          options={{ title: 'Detalles del Pedido' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}