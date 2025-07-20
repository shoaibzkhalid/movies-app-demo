import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from './Icon'

type BackButtonProps = {
  className?: string
  isFloating?: boolean
}

export default function BackButton({ isFloating = false }: BackButtonProps) {
  const navigation = useNavigation()
  const positionClass = isFloating ? 'absolute left-4 top-14 bg-transparent z-10' : `bg-transparent`

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      className={`${positionClass} overflow-hidden rounded-full p-4 opacity-90`}>
      <Icon name="back" width={20} height={20} />
    </Pressable>
  )
}
