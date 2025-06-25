
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ title, subtitle, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "min-h-[100vh] py-2 px-4 flex flex-col justify-center items-center scroll-mt-16",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className="max-w-3xl mx-auto px-4 text-center mb-16">

          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet via-violet-dark to-violet bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
