import * as React from 'react';
import { View, Text } from 'react-native';
import {ContextProvider} from 'react-simplified-context' //아이템 관리
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Drawer';


export default class App extends React.Component {
  state = {
    todos: [{
      id: 1,
      title: "클래스101 완강하기",
      date: "06.13",
      done: false,
    }, {
      id: 2,
      title: "투두 앱 예쁘게 만들기",
      date: "06.15",
      done: true,
    }]
  }
  render() {
    return (
      <ContextProvider
        todos={this.state.todos}
      >
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </ContextProvider>
    );
  }
}
