import { create } from 'zustand';
interface UiState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}
export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
}));
