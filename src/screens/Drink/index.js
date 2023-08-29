import { StyleSheet, Text, View } from 'react-native'

export default function Drink() {
  return(
    <View style={StyleSheet.container}>
      <Text>Página Fazer Drink</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
})