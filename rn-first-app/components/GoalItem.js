import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.7} onLongPress={props.onDelete.bind(this, props.uid)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
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