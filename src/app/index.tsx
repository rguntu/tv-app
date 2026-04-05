import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { DealCard } from '../components/DealCard';

const MOCK_DEALS = [
  { id: '1', title: 'Samsung 55" OLED TV', price: 1299.99 },
  { id: '2', title: 'LG 65" NanoCell TV', price: 899.50 },
];

export default function DealsFeed() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_DEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DealCard deal={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});
