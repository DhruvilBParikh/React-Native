import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {

  const [goals, setGoals] = useState([])
  const [isAddModalOpen, setIsModelOpen] = useState(false)
  
  const handlePress = (enteredGoal) => {
    setGoals(currentGoals => [...currentGoals, 
      {uid: Math.random().toString(), value: enteredGoal}
    ])
    setIsModelOpen(false)
  }

  const handleDeleteGoal = (uid) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid!=uid)
    })
  }

  const handleCancelAddModal = () => {
    setIsModelOpen(false)
  }

  return (
    <View style={{ margin: 40 }} >
      <Button title="Add New Goal" onPress={()=>setIsModelOpen(true)} />
      <GoalInput visible={isAddModalOpen} onAddGoal={handlePress} onCancelButton={handleCancelAddModal} />
      <FlatList
        keyExtractor={(item, index)=>item.uid}
        data={goals} renderItem={itemData => (<GoalItem uid={itemData.item.uid} title={itemData.item.value} onDelete={handleDeleteGoal} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
