import React, { useEffect, useState } from 'react'
import { View, TextInput, Pressable } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Icon from './Icon'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchStore } from '@/stores/search.store'
import { RootStackParamList } from '@/types/navigation/rootstack'

function SearchBar() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const [input, setInput] = useState('')
  const inputRef = React.useRef<TextInput>(null)

  const setSearch = useSearchStore((store) => store.setSearch)
  const setSearchOpen = useSearchStore((store) => store.setSearchOpen)

  const debouncedInput = useDebounce(input, 400)

  React.useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 500)
  }, [])

  useEffect(() => {
    setSearch(debouncedInput)
  }, [debouncedInput, setSearch])

  const onClose = () => {
    setSearch('')
    setInput('')
    setSearchOpen(false)
    navigation.goBack()
  }

  const onChangeText = (text: string) => setInput(text)

  const onBlur = () => setSearchOpen(false)

  return (
    <View className="h-24 flex-1 justify-center">
      <View className="m-4 h-16 flex-row items-center justify-between rounded-full bg-background px-4">
        <View className="flex-row">
          <View className="mx-2 self-center">
            <Icon name="search" width={20} height={20} />
          </View>

          <TextInput
            ref={inputRef}
            onBlur={onBlur}
            maxLength={35}
            onChangeText={onChangeText}
            placeholder="TV shows, movies and more"
            placeholderTextColor={'black'}
            className="text-black"
            style={{ fontSize: 16 }}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
        </View>
        <Pressable onPress={onClose}>
          <Icon name="close" />
        </Pressable>
      </View>
    </View>
  )
}

export default SearchBar
