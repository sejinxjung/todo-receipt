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
            <Text style={styles.text}>
              Left
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              {count}
            </Text>
          </View>  
        </View>
        <AddTask/>
        <TaskModal/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
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
  },
  textBox: {
    width: 76,
    alignItems: 'center',
  },
  text: {
    marginVertical: 4,
    fontSize: 18,
    fontWeight: '600',
  }
})

export default withContext(ListScreen)