// src/navigation/TransactionsStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../components/TransactionsList';
import TransactionDetail from '../components/TransactionDetail';

const Stack = createStackNavigator();

const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions List' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
