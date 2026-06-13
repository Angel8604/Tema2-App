import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';

export default function MenuScreen({ navigation }: any) {
  // Hooks: Estado para las bebidas y estado de carga
  const [coffees, setCoffees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Hooks: Simulación de carga de datos al abrir la pantalla
  useEffect(() => {
    setTimeout(() => {
      setCoffees([
        { id: '1', name: 'Capuchino Clásico', price: 45.00, description: 'Doble carga de espresso con leche vaporizada y abundante espuma.', category: 'Caliente' },
        { id: '2', name: 'Frappé de Caramelo', price: 65.00, description: 'Bebida helada de café licuado con hielo, caramelo y crema batida.', category: 'Frío' },
        { id: '3', name: 'Americano', price: 35.00, description: 'Espresso diluido en agua caliente, sabor intenso.', category: 'Caliente' },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#d97706" />
        <Text style={styles.loadingText}>Cargando menú de Café Aroma...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coffees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoffeeCard
            name={item.name}
            price={item.price}
            // Navegación y envío de parámetros
            onPress={() => navigation.navigate('Detalle', {
              coffeeName: item.name,
              description: item.description,
              price: item.price,
              category: item.category
            })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb' },
  loadingText: { marginTop: 12, color: '#4a3f35', fontSize: 16 },
});