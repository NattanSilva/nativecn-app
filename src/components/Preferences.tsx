import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox } from './Checkbox'
import { Option } from './Option'
import { Switch } from './Switch'
import { Title } from './Title'

export function Preferences() {
  const [isEnabled, setIsenabled] = useState(false)

  return (
    <View className='w-full'>
      <Title>Preferences</Title>
      <Option>
        <Option.Icon icon='dark-mode' />
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={setIsenabled} value={isEnabled} />
      </Option>

      <Option>
        <Option.Icon icon='email' />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  )
}
