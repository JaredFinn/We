import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface NavigationBarProps {
    onTabPress: (tabName: string) => void;
  }

export default class NavigationBar extends React.Component<NavigationBarProps>  {
    
  state = {
    activeTab: 'Home',
  };

  handleTabPress = (tabName: string) => {
    this.setState({ activeTab: tabName });
    this.props.onTabPress(tabName);
  };

  render() {
    const { activeTab } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.tab}>
            <Icon name='home' size={30} color={activeTab === 'Home' ? '#007aff' : '#999'} onPress={() => this.handleTabPress('Home')}/>
        </View>

        <View style={styles.tab}>
            <Icon name='list' size={30} color={activeTab === 'Call' ? '#007aff' : '#999'} onPress={() => this.handleTabPress('Call')}/>
        </View>

        <View style={styles.tab}>
            <Icon name='user' size={30} color={activeTab === 'Account' ? '#007aff' : '#999'} onPress={() => this.handleTabPress('Account')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
