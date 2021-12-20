import React from 'react'
import {
  StyleSheet,
  Text, 
  Dimensions, 
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
})

function widthButton(value){
  const widthSpaces = StyleSheet.create({
    space: {
      width: (Dimensions.get('window').width / 4) * value
    }
  })
  return widthSpaces.space;
}

export default function Button({onClick, label, spaces = 1, operation}) {
  if(spaces > 4) {
    spaces = 1
  }
  
  const stylesButton = [styles.button, widthButton(spaces)]
  if(operation) stylesButton.push(styles.operationButton)

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  )
}