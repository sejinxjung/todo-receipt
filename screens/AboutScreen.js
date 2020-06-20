import React from 'react'
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native'
import {withContext} from 'react-simplified-context'
import TodoItem from '../components/TodoItem'
import Header from '../components/Header'
import Category from '../components/Category'
import SettingButton from '../components/SettingButton'

const AboutScreen = ({
  todos,
  navigation,
}) => {
  const count = todos.filter((todo) => !todo.finished).length

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 8,
    alignItems: 'center',
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

export default withContext(AboutScreen)