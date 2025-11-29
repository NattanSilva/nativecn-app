import { SKILLS } from '@/utils/skills'
import { View } from 'react-native'
import { Badge } from './Badge'
import { Title } from './Title'

export function Skills() {
  return (
    <View className='w-full'>
      <Title>Skills</Title>

      <View className='flex-row w-full flex-wrap gap-3'>
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  )
}
