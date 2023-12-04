import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { useStorage } from '../../hooks/useStorage'

export function Passwords () {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass')
            console.log('passwords', passwords)
        }
        loadPasswords()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.header}>
                <Text style={style.title}>Minhas Senhas</Text>
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    }
})