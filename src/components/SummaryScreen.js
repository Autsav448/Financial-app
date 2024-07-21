// src/components/SummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from '../../transactionsData';

const SummaryScreen = () => {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>High Spending</Text>
        <Text style={styles.value}>{highSpending.name}</Text>
        <Text style={styles.value}>${highSpending.amount.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Low Spending</Text>
        <Text style={styles.value}>{lowSpending.name}</Text>
        <Text style={styles.value}>${lowSpending.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SummaryScreen;
