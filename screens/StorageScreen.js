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
import StorageHeader from '../components/StorageHeader'
import Category from '../components/Category'
import SettingButton from '../components/SettingButton'


const StorageScreen = ({
  todos,
  navigation,
}) => {
  return (
    <SafeAreaView>
      <SettingButton navigationProps={navigation}/>
      <StorageHeader />
      <Category />
      <FlatList
        data={todos.filter((todo) => {
          return todo.finished
        })}
        renderItem={({item}) => { return <TodoItem todo={item} /> 
        }}
        keyExtractor={(item) => {return `${item.id}`}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default withContext(StorageScreen)