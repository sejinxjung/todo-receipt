import React from 'react';
import { AsyncStorage } from 'react-native'
import {ContextProvider} from 'react-simplified-context' //아이템 관리
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Drawer';

//check 세이브 안됨, item이 editing: false로 동일.
export default class App extends React.Component {
  state = {
    todos: [],
    id: 0,
    showModal: false,
    editing: false,
  }
  componentDidMount() {
    AsyncStorage.getItem('@receipt:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }
  
  save = () => {
    AsyncStorage.setItem('@receipt:state', JSON.stringify(this.state))
  }

  render() {
    return (
      <ContextProvider
        todos={this.state.todos}
        add={(title) => {
          const now = new Date ()
          this.setState({
            todos: [{
              id: this.state.id,
              title: title,
              finished: false,
              date: `${now.getMonth() +1}. ${now.getDate()}`,
            }].concat(this.state.todos),
            id: this.state.id + 1,
            showModal: false,
            editing: false,
          }, this.save)
        }}
        toggle={(id) => {
          const newTodos = [...this.state.todos]
          const index = newTodos.findIndex((a) => {
            return a.id ===id
          })
          newTodos[index].finished = !newTodos[index].finished
          this.setState({
            todos: newTodos, 
          }, this.save)
        }}
        remove={(id) => {
          this.setState({
            todos: this.state.todos.filter((a) => a.id !== id)
          }, this.save)
        }}
        update={(id, title) => {
          const newTodos = [...this.state.todos]
          const index = newTodos.findIndex((a) => {
            return a.id ===id
          })
          newTodos[index].title = title
          this.setState({
            todos: newTodos, 
            showModal: false,
            editing: false,
          }, this.save)
        }}
        //Modal
        hide={() => {
          this.setState({ showModal: false})
          this.setState({ editing: false})
        }}
        show={() => {
          this.setState({ showModal: true})
        }}
        edit={() => {
          this.setState({ editing: true})
          this.setState({ showModal: true})
        }}
        isVisible={this.state.showModal}
        isEditing={this.state.editing}
>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </ContextProvider>
    );
  }
}
