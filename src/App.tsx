import { lazy, Suspense, useEffect } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useMediaQuery } from './hooks/useMediaQuery'
import { refreshScrollTriggers } from './lib/animations'

// Desktop-only enhancement: loaded on demand, never on touch devices.
const CustomCursor = lazy(() => import('./components/CustomCursor'))
const belowTheFold = [About, Expertise, Experience, Projects, Education, Journey, Contact]
const CURSOR_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export default function App() {
  const showCursor = useMediaQuery(CURSOR_QUERY)

  // Web fonts shift layout slightly; re-measure the scrubbed scroll triggers once loaded.
  useEffect(() => {
    document.fonts?.ready.then(refreshScrollTriggers)
  }, [])

  return (
    <>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          {/* Each boundary hydrates on its own, splitting one long task into several short ones. */}
          {belowTheFold.map((Section, i) => (
            <Suspense key={i} fallback={null}>
              <Section />
            </Suspense>
          ))}
        </main>
        <Footer />
        {showCursor ? (
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
        ) : null}
    </>
  )
}
