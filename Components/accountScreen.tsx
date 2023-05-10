import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Account</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profile}>
          <Image
            style={styles.profilePic}
            source={{ uri: '/' }}
          />
          <Text style={styles.profileName}>John Smith</Text>
          <Text style={styles.profileHeader}>Software Engineer</Text>
          <Text style={styles.profileBio}>I love building apps that make people's lives easier.</Text>
        </View>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>I'm a software engineer with over 5 years of experience in developing mobile and web applications. My passion is to build products that solve real-world problems and improve people's lives. In my free time, I enjoy hiking, reading, and trying out new restaurants.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  header: {
    height: 80,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default AccountScreen;
