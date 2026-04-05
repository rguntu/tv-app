import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Deal {
  id: string;
  title: string;
  price: number;
}

interface DealCardProps {
  deal: Deal;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{deal.title}</Text>
      <Text style={styles.price}>${deal.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green' },
});
