import { create } from "zustand";
import type { Locale } from "@/lib/types";

type PortfolioState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale })
}));
