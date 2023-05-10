import React from 'react';
import { View, Text } from 'react-native';
import NavigationBar from './Components/navBar';
import HomeScreen from './Components/homeScreen';
import AccountScreen from './Components/accountScreen';

export default class App extends React.Component {
  state = {
    activeTab: 'Home',
  };

  handleTabPress = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    let content;
    switch (this.state.activeTab) {
      case 'Home':
        content = <HomeScreen/>;
        break;
      case 'Call':
        content = <Text>Call Screen</Text>;
        break;
      case 'Account':
        content = <AccountScreen/>;
        break;
      default:
        content = <Text>Error Screen</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        {content}
        <NavigationBar onTabPress={this.handleTabPress} />
      </View>
    );
  }
}
