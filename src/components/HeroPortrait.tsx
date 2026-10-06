/**
 * Editorial portrait composition: the resume's circular photo, rebuilt with a
 * thin ring, an offset outline, a slow tick ring, crosshair rules and small
 * metadata labels. Swap the files in /public (profile*.avif|webp|jpg) to
 * replace the photo; the 1:1 aspect ratio is preserved with object-cover.
 */
export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-[min(68vw,23rem)] lg:w-[min(30vw,26rem)]">
      {/* Crosshair rules through the portrait centre. */}
      <span
        data-hero-line-x
        aria-hidden="true"
        className="absolute left-[-18%] right-[-18%] top-1/2 h-px bg-ink/25"
      />
      <span
        data-hero-line-y
        aria-hidden="true"
        className="absolute bottom-[-14%] top-[-14%] left-1/2 w-px bg-ink/25"
      />

      {/* Slow tick ring on its own composited layer (an HTML wrapper, not an SVG group). */}
      <div aria-hidden="true" className="animate-spin-slow absolute inset-[-11%]">
        <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
          <circle
            cx="100"
            cy="100"
            r="93"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="2.2"
            strokeDasharray="0.35 4.5"
          />
        </svg>
      </div>

      {/* Outer guide circle + registration marks. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute inset-[-11%] h-[122%] w-[122%] overflow-visible"
      >
        <circle
          data-hero-circle
          cx="100"
          cy="100"
          r="99"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="0.4"
          pathLength="1"
          strokeDasharray="1"
        />
        {/* Registration marks at the four compass points. */}
        {[0, 90, 180, 270].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 100 100)`}>
            <line x1="100" y1="-4" x2="100" y2="4" stroke="currentColor" strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      {/* Offset outline frame. */}
      <span
        data-hero-frame
        aria-hidden="true"
        className="absolute inset-0 translate-x-[5%] translate-y-[5%] rounded-full border border-ink/35"
      />

      {/* Portrait with thin ring + gap, like a printed passe-partout. */}
      <div
        data-hero-portrait
        className="relative h-full w-full rounded-full border border-ink/70 bg-bg p-[3.5%]"
      >
        <picture>
          <source
            type="image/avif"
            srcSet="/profile-480.avif 480w, /profile.avif 800w"
            sizes="(min-width: 1024px) 420px, 72vw"
          />
          <source
            type="image/webp"
            srcSet="/profile-480.webp 480w, /profile.webp 800w"
            sizes="(min-width: 1024px) 420px, 72vw"
          />
          <img
            src="/profile.jpg"
            alt="Prashanth Veluv, Digital Marketing and Business Analytics professional"
            width={800}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full rounded-full object-cover grayscale-[0.9] contrast-[1.04] transition-[filter] duration-700 hover:grayscale-[0.4]"
          />
        </picture>
      </div>
    </div>
  )
}
