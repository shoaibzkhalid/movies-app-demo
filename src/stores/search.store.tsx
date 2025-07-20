import { create } from 'zustand'

type SearchState = {
  search: string
  setSearch: (search: string) => void
  searchOpen: boolean
  setSearchOpen: (searchOpen: boolean) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  searchOpen: false,
  setSearchOpen: (searchOpen) => set({ searchOpen }),
}))
