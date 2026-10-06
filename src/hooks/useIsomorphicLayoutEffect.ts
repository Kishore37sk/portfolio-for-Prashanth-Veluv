import { useEffect, useLayoutEffect } from 'react'

/** useLayoutEffect in the browser, useEffect during prerendering (avoids SSR warnings). */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
