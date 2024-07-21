// src/components/TransactionDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.location}>North York, ON</Text>
      <Text style={styles.dateLabel}>Transaction Date</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
  },
});

export default TransactionDetail;
