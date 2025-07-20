import { BackHandler, View } from 'react-native'
import { useRef, useEffect, useState } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'
import { SafeAreaView } from 'react-native-safe-area-context'
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import BackButton from '@/components/BackButton'

export default function MoviePlayback() {
  const navigation = useNavigation()
  const playerRef = useRef<YoutubeIframeRef>(null)

  const route = useRoute<RouteProp<{ params: { videoId: string | undefined } }, 'params'>>()
  const videoId = route.params.videoId

  const [playing, setPlaying] = useState(true)

  // Close screen on Android hardware back press while playing
  useEffect(() => {
    const lockLandscape = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }

    const unlock = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    }

    lockLandscape()

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack()
      return true
    })

    return () => {
      unlock()
      backHandler.remove()
    }
  }, [])

  const onVideoStateChange = (state: string) => {
    if (state === 'ended') {
      setPlaying(false)
      navigation.goBack()
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="absolute left-10 top-10 z-50 rounded-full opacity-70">
        <BackButton />
      </View>
      <YoutubePlayer
        ref={playerRef}
        height={390}
        play={playing}
        onReady={() => playerRef.current?.seekTo(0, true)}
        videoId={videoId}
        onChangeState={onVideoStateChange}
        forceAndroidAutoplay={true}
        initialPlayerParams={{
          autoplay: true,
          controls: 1,
          fs: 1,
          modestbranding: true,
        }}
      />
    </SafeAreaView>
  )
}
