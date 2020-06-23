import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native'
import {withContext} from 'react-simplified-context'
import TodoItem from '../components/TodoItem'
import Header from '../components/Header'
import Category from '../components/Category'
import SettingButton from '../components/SettingButton'
import AddTask from '../components/AddTask'
import TaskModal from '../components/TaskModal'

const ListScreen = ({
  todos,
  navigation,
}) => {
  const count = todos.filter((todo) => !todo.finished).length

  return (
    <SafeAreaView style={styles.container}>
      <SettingButton navigationProps={navigation}/>
      <Header/>
      <Category/>
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return <TodoItem todo={item} /> 
        }}
        keyExtractor={(item) => {
          return `${item.id}`
        }}
      />
      <View style={styles.content}>
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.text}> Left
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.left}>
              {count}
            </Text>
          </View>  
        </View>
        <AddTask/>
        <TaskModal title={todos.title}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  content: {
    paddingHorizontal: 8,
    justifyContent: 'flex-end',
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderTopWidth: 2,
    borderTopColor: '#5588a3'
  },
  textBox: {
    width: 66,
    alignItems: 'center',
  },
  text: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '600',
    color:'#5588a3'
  },
  left: {
    marginVertical: 4,
    fontSize: 18,
    fontWeight: '700',
    color: '#ca3e47'
  }
})

export default withContext(ListScreen)