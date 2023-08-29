import React from 'react'
import { StyleSheet, ScrollView, StatusBar, View, Text, SafeAreaView} from 'react-native'

import { Container, Header } from './styles'

import { Input } from '../../components/Input'

import coverImg from '../../assets/cover.png'

const statusBarHeight = StatusBar.currentHeight

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Container>
          <Header source={coverImg}>
            <Input placeholder='Pesquisar...'/>
          </Header>
        </Container>

        <View style={styles.content}>
          <Text>Conteúdo 1</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo 2</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo 3</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo 4</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo 5</Text>
        </View>

        <View style={styles.content}>
          <Text>Conteúdo 6</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    paddingTop: 30,
    // paddingTop: Platform.OS === 'android' ? statusBarHeight : 25
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '98%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  }
})