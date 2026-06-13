import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CoffeeCardProps {
  name: string;
  price: number;
  onPress: () => void;
}

export default function CoffeeCard({ name, price, onPress }: CoffeeCardProps) {
  return (
    // Manejo de eventos con onPress
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 2, // Sombra en Android
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a3f35', // Tono café
  },
  price: {
    fontSize: 16,
    color: '#d97706',
    marginTop: 4,
  },
});