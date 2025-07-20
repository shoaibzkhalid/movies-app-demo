import { Text, Pressable, View } from 'react-native'
import Icon from './Icon'

type CustomButtonProps = {
  onPress: () => void
  title: string
  className?: string
  color: 'primary' | 'transparent'
  icon?: string
}

export default function CustomButton({
  onPress,
  title,
  className,
  color,
  icon,
}: CustomButtonProps) {
  const borderClasses = color === 'transparent' ? 'border-2 border-primary' : 'bg-primary'

  return (
    <Pressable
      onPress={onPress}
      className={`mt-4 w-72 items-center rounded-2xl ${borderClasses} py-5 ${className}
      border-t-1 border-2 border-primary
      `}>
      <View className="flex-row items-center">
        {icon ? <Icon name="play" /> : null}
        <Text className="mx-2 font-semibold text-white">{title}</Text>
      </View>
    </Pressable>
  )
}
