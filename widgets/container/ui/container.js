import { View } from 'react-native'

export const Container = ({ children, styles }) => {
   return <View style={{ ...styles }}>{children}</View>
}
