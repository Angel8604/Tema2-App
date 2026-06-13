import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CoffeeDetailScreen({ route, navigation }: any) {
  // Recepción de parámetros enviados desde MenuScreen
  const { coffeeName, description, price, category } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{category}</Text>
      </View>
      
      <Text style={styles.title}>{coffeeName}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Regresar al Menú</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 24 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#fde68a', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginBottom: 16 },
  badgeText: { color: '#b45309', fontWeight: 'bold', fontSize: 12 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4a3f35', marginBottom: 8 },
  price: { fontSize: 22, color: '#d97706', fontWeight: '600', marginBottom: 20 },
  description: { fontSize: 16, color: '#6b7280', lineHeight: 24, marginBottom: 40 },
  backButton: { backgroundColor: '#4a3f35', padding: 16, borderRadius: 8, alignItems: 'center' },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});