import React, { useState } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

var resultBuffer = 0;
var clearDisplay = false;
var lastOperation = null;

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')
  
  function addDigit(digitedValue) {
    var newDisplayValue = displayValue;
    
    if(digitedValue === '.' && displayValue.includes('.')){
      return
    }
    
    if(displayValue === "0" && digitedValue !== '.'){
      setDisplayValue(digitedValue);
      return
    }
    
    if(clearDisplay && digitedValue !== '.'){
      newDisplayValue = digitedValue;
      clearDisplay = false;
    } else {
      newDisplayValue = newDisplayValue + digitedValue
      clearDisplay = false;
    }
    setDisplayValue(newDisplayValue);
    
  }

  function clearMemory() {
    resultBuffer = 0;
    clearDisplay = false;
    lastOperation = null;
    setDisplayValue('0');
  }

  function setOperation(newOperation) {
    let newDisplayValue = displayValue;

    if(displayValue.charAt(displayValue.length - 1) == '.'){
      newDisplayValue = parseInt(newDisplayValue + "0").toString()
    }
    if(clearDisplay == false){
      resultBuffer = calculation(resultBuffer, lastOperation, newDisplayValue)
    }
    lastOperation = newOperation;

    clearDisplay = true;

    setDisplayValue(resultBuffer.toString())
  }

  function calculation(buffer, operation, value){
      value = parseFloat(value)

      if(!operation) return value

      if(operation === '+'){
        return buffer + value
      } else if(operation === '-'){
        return buffer - value  
      } else if(operation === '*') {
        if(buffer == 0) buffer = 1
        return buffer * value 
      } else if(operation === '/') {
        if(buffer == 0) return value
        return buffer / value 
      } else {
        return buffer
      }
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
        <Button label={'x'} onClick={setOperation} operation returnValue="*"/>  
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
