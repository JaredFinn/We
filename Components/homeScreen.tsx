import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const HomeFeedPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <ScrollView style={styles.content}>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 80,
    backgroundColor: '#FF5700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default HomeFeedPage;
