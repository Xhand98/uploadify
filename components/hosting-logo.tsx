export function HostingLogo({ className = "w-10 h-10" }: { className?: string }) {
  const brandColor = "rgb(205, 229, 46)"

  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server Stack */}
      <g>
        {/* Bottom Server */}
        <rect x="40" y="130" width="120" height="30" rx="4" fill={brandColor} opacity="0.3" />
        <circle cx="55" cy="145" r="3" fill={brandColor} />
        <circle cx="65" cy="145" r="3" fill={brandColor} />
        <rect x="80" y="142" width="70" height="6" rx="2" fill={brandColor} opacity="0.5" />

        {/* Middle Server */}
        <rect x="40" y="90" width="120" height="30" rx="4" fill={brandColor} opacity="0.6" />
        <circle cx="55" cy="105" r="3" fill={brandColor} />
        <circle cx="65" cy="105" r="3" fill={brandColor} />
        <rect x="80" y="102" width="70" height="6" rx="2" fill={brandColor} opacity="0.7" />

        {/* Top Server */}
        <rect x="40" y="50" width="120" height="30" rx="4" fill={brandColor} />
        <circle cx="55" cy="65" r="3" fill="rgb(40, 40, 40)" />
        <circle cx="65" cy="65" r="3" fill="rgb(40, 40, 40)" />
        <rect x="80" y="62" width="70" height="6" rx="2" fill="rgb(40, 40, 40)" opacity="0.3" />
      </g>

      {/* Cloud Connection */}
      <g>
        <path
          d="M 100 35 Q 85 25, 75 30 Q 65 20, 55 30 Q 45 30, 45 40 Q 45 50, 55 50 L 95 50 Q 105 50, 105 40 Q 105 35, 100 35 Z"
          fill={brandColor}
          opacity="0.8"
        />
      </g>

      {/* Decorative Elements */}
      <circle cx="30" cy="100" r="4" fill={brandColor} opacity="0.3" />
      <circle cx="170" cy="100" r="4" fill={brandColor} opacity="0.3" />
      <circle cx="100" cy="170" r="4" fill={brandColor} opacity="0.3" />
    </svg>
  )
}
