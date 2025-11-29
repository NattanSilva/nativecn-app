import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, View } from 'react-native'
import { Button } from './Button'
import { Input } from './Input'
import { Preferences } from './Preferences'
import { Skills } from './Skills'
import { useToast } from './Toast'
import { User } from './User'

export function Profile() {
  const { toast } = useToast()
  return (
    <View className='flex-1 bg-gray-700'>
      <ScrollView>
        <Image
          source={require('@/assets/banner.png')}
          className='w-full max-w-dvw h-52 -mb-16'
        />
        <View className='flex-1 px-4 pb-4'>
          <User />
          <Skills />
          <Preferences />
          <View className='w-full mt-4 flex-1'>
            <Input placeholder='Company' inputClasses='mb-6' label='Company' />
            <Button label='Save' onPress={() => toast('Saved!')} />
          </View>
        </View>
        <StatusBar style='light' />
      </ScrollView>
    </View>
  )
}
