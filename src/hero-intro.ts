// Separate, async entry: only GSAP core + the hero timeline. It starts the
// intro as soon as the prerendered HTML is parsed, without waiting for React.
import { playHeroIntro } from './lib/heroIntro'

if (document.readyState === 'loading') {
  document.addEventListener('readystatechange', playHeroIntro, { once: true })
} else {
  playHeroIntro()
}
