import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const Post = styled.View`
   background-color: red;
   height: 100px;
   width: 100px;
   border-radius: 15px;
   margin-bottom: 20px;
`

export default function App() {
   return (
      <View>
         <Post>
            <Text>text</Text>
         </Post>
      </View>
   )
}
