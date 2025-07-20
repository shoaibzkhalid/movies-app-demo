import { SvgProps } from 'react-native-svg'

import DashboardIcon from '@/assets/icons/dashboard.svg'
import LibraryIcon from '@/assets/icons/library.svg'
import MoreIcon from '@/assets/icons/more.svg'
import WatchIcon from '@/assets/icons/watch.svg'
import PlayIcon from '@/assets/icons/play.svg'
import SearchIcon from '@/assets/icons/search.svg'
import CloseIcon from '@/assets/icons/close.svg'
import BackIcon from '@/assets/icons/back.svg'

const icons = {
  dashboard: DashboardIcon,
  library: LibraryIcon,
  more: MoreIcon,
  watch: WatchIcon,
  play: PlayIcon,
  search: SearchIcon,
  close: CloseIcon,
  back: BackIcon,
}

export type IconName = keyof typeof icons

type Props = {
  name: IconName
} & SvgProps

export default function Icon({ name, ...props }: Props) {
  const SvgIcon = icons[name]
  return <SvgIcon {...props} />
}
