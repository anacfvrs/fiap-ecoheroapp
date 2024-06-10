import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random?tags=motivational')
      .then((response) => response.json())
      .then((data) => setQuote(`"${data.content}" - ${data.author}`))
      .catch((error) => console.error('Erro ao buscar citação:', error));
  }, []);

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
  },
});
