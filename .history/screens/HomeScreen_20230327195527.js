import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      first
    
      return () => {
        second
      };
    }, [third])

  return (
    <View>
      <Text className='text-red-500'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;