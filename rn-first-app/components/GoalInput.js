import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const handleTextInputChange = (goal) => {
        setEnteredGoal(goal)
    }

    const handleAddGoal = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={handleTextInputChange} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancelButton} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={handleAddGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width:'40%'
    }
})

export default GoalInput