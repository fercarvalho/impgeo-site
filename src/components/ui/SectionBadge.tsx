interface SectionBadgeProps {
  children: React.ReactNode
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
                     bg-primary-500/10 text-primary-600 dark:text-primary-400
                     border border-primary-500/20">
      {children}
    </span>
  )
}
