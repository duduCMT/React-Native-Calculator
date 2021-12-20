import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')

  function addDigit(n) {
    setDisplayValue(n)
  }

  function clearMemory() {
    setDisplayValue('0')
  }

  function setOperation(operation) {

  }


  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label={'AC'} onClick={clearMemory} spaces={3} />  
        <Button label={'/'} onClick={setOperation} operation/>  
        <Button label={'7'} onClick={addDigit}/>  
        <Button label={'8'} onClick={addDigit}/>  
        <Button label={'9'} onClick={addDigit}/>  
        <Button label={'*'} onClick={setOperation} operation />  
        <Button label={'4'} onClick={addDigit}/>  
        <Button label={'5'} onClick={addDigit}/>  
        <Button label={'6'} onClick={addDigit}/>  
        <Button label={'-'} onClick={setOperation} operation/>  
        <Button label={'1'} onClick={addDigit}/>  
        <Button label={'2'} onClick={addDigit}/>  
        <Button label={'3'} onClick={addDigit}/>  
        <Button label={'+'} onClick={setOperation} operation/>  
        <Button label={'0'} onClick={addDigit} spaces={2}/>  
        <Button label={'.'} onClick={addDigit}/>  
        <Button label={'='} onClick={setOperation} operation/>  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
