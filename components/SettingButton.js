import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import {SimpleLineIcons} from '@expo/vector-icons'


const SettingButton = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer()
  }
  return (
  <View style={styles.box}>
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={() => toggleDrawer()}
    >
      <SimpleLineIcons name = 'settings' color='#333333' size={24}/>
    </TouchableOpacity>
  </View> 
  )
}

const styles = StyleSheet.create ({
  box: {
    height: 36,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    padding: 2,
  }
})

export default SettingButton