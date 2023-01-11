import { useState, useEffect } from 'react'

const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
}

interface Size {
  width: number
  height: number
}

interface IDeviceInfo extends Size {
  browser: string
  isMobile: boolean
  smUp: boolean
  smDown: boolean
  mdUp: boolean
  mdDown: boolean
  lgUp: boolean
  lgDown: boolean
  xlUp: boolean
  xlDown: boolean
  xxlUp: boolean
  xxlDown: boolean
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
  const smUp = width >= TAILWIND_BREAKPOINTS.sm
  const smDown = width < TAILWIND_BREAKPOINTS.sm
  const mdUp = width >= TAILWIND_BREAKPOINTS.md
  const mdDown = width < TAILWIND_BREAKPOINTS.md
  const lgUp = width >= TAILWIND_BREAKPOINTS.lg
  const lgDown = width < TAILWIND_BREAKPOINTS.lg
  const xlUp = width >= TAILWIND_BREAKPOINTS.xl
  const xlDown = width < TAILWIND_BREAKPOINTS.xl
  const xxlUp = width >= TAILWIND_BREAKPOINTS.xxl
  const xxlDown = width < TAILWIND_BREAKPOINTS.xxl
  const isMobile = width < TAILWIND_BREAKPOINTS.md

  const curSizes = {
    smUp,
    smDown,
    mdUp,
    mdDown,
    lgUp,
    lgDown,
    xlUp,
    xlDown,
    xxlUp,
    xxlDown,
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
