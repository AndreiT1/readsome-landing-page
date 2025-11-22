import { BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary p-3 rounded-lg">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          We're Working on Something Special
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          Readsome is coming soon. We're building a better way to learn from the world's best books.
        </p>

        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">Under Construction</span>
        </div>
      </div>
    </div>
  )
}
