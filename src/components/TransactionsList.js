// src/components/TransactionsList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { transactions } from '../../transactionsData';

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemAmount}>${item.amount.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
  },
  itemAmount: {
    fontSize: 16,
    color: '#555',
  },
});

export default TransactionsList;
