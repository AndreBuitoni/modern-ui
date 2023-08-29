import { StyleSheet, Text, View } from 'react-native'

export default function Guia() {
  return(
    <View style={StyleSheet.container}>
      <Text>Página Guia do Bar</Text>
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