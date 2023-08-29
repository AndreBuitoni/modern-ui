import { StyleSheet, Text, View } from 'react-native'

export default function Profile() {
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Página Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: '#ff2222',
    fontWeight: '900',
    fontSize: 30
  }
})