import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'


const StorageHeader = () => {
  let now = new Date()
  const today = now.toLocaleDateString()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.semititle}> To Do
        </Text>
        <Text style={styles.title}>
          Storage
        </Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.text}>
          Customer : Jin.
        </Text>
        <Text 
          style={styles.text}
        >
          Date : {today}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  semititle: {
    color: '#212121',
    fontSize: 21,
    fontWeight: '600',
  },
  title: {
    color: '#212121',
    fontSize: 36,
    fontWeight: '700',
    marginTop: -6,
  },
  profile: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
  },
  text: {
    color: '#212121',
    fontSize: 14,
  },
})
export default StorageHeader