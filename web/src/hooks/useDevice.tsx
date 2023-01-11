import { useState, useEffect } from 'react'

const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

interface Size {
  width: number
  height: number
}

interface IDeviceInfo extends Size {
  browser: string
  isMobile: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2xl: boolean
}

export function useDevice(): IDeviceInfo {
  const [browser, setBrowser] = useState<string>('UNKNOWN')
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    if (window) {
      window.addEventListener('resize', handleResize)
      handleResize()
      setBrowser(getBrowser(window.navigator.userAgent))

      return () => window.removeEventListener('resize', handleResize)
    }
    return () => {}
  }, [])

  const { width } = windowSize
  const isSm = width < TAILWIND_BREAKPOINTS.md
  const isMd =
    width > TAILWIND_BREAKPOINTS.sm && width < TAILWIND_BREAKPOINTS.lg
  const isLg =
    width > TAILWIND_BREAKPOINTS.md && width < TAILWIND_BREAKPOINTS.xl
  const isXl =
    width > TAILWIND_BREAKPOINTS.lg && width < TAILWIND_BREAKPOINTS['2xl']
  const is2xl = width >= TAILWIND_BREAKPOINTS['2xl']
  const isMobile = width < TAILWIND_BREAKPOINTS.md
  const curSizes = {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  }

  return {
    width: windowSize.width,
    height: windowSize.height,
    browser,
    isMobile,
    ...curSizes,
  }
}

function getBrowser(userAgent: string): string {
  return Object.entries(BROWSERS).find(([k, v]) =>
    userAgent.match(v) ? k : 'UNKNOWN'
  )[0]
}

const BROWSERS = {
  FIREFOX: /Firefox/,
  SAMSUNG_INTERNET: /SamsungBrowser/,
  OPERA: /Opera|OPR/,
  IE: /Trident/,
  EDGE_LEGACY: /Edge/,
  BRAVE: /Brave/,
  EDGE_CHROMIUM: /Edg/,
  CHROME: /Chrome/,
  SAFARI: /Safari/,
  UNKNOWN: /unknown/,
}
