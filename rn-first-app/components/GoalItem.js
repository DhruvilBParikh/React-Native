import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.listItem} >
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 5
    }
})

export default GoalItem