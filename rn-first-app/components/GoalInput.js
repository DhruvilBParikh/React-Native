import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const handleTextInputChange = (goal) => {
        setEnteredGoal(goal)
    }

    return (
        <View style={styles.inputContainer} >
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={handleTextInputChange} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        width: "70%",
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    }
})

export default GoalInput