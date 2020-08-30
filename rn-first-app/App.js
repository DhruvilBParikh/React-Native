import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {

  const [goals, setGoals] = useState([])
  
  const handlePress = (enteredGoal) => {
    setGoals(currentGoals => [...currentGoals, 
      {uid: Math.random().toString(), value: enteredGoal}
    ])
  }

  const handleDeleteGoal = (uid) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid!=uid)
    })
  }

  return (
    <View style={{ margin: 40 }} >
      <GoalInput onAddGoal={handlePress} />
      <FlatList
        keyExtractor={(item, index)=>item.uid}
        data={goals} renderItem={itemData => (<GoalItem uid={itemData.item.uid} title={itemData.item.value} onDelete={handleDeleteGoal} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
