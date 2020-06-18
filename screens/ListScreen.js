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

const ListScreen = ({
  todos,
  navigation,
}) => {
  return (
    <SafeAreaView>
      <SettingButton navigationProps={navigation}/>
      <Header/>
      <Category/>
      <FlatList
        data={todos}
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

export default withContext(ListScreen)