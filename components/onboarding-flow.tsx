"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Target, Sparkles, Check } from 'lucide-react'
import { cn } from "@/lib/utils"

const interests = [
  { id: "business", label: "Business & Money", icon: "💼" },
  { id: "psychology", label: "Psychology", icon: "🧠" },
  { id: "productivity", label: "Productivity", icon: "⚡" },
  { id: "health", label: "Health & Fitness", icon: "💪" },
  { id: "science", label: "Science", icon: "🔬" },
  { id: "history", label: "History", icon: "📜" },
  { id: "philosophy", label: "Philosophy", icon: "🤔" },
  { id: "technology", label: "Technology", icon: "💻" },
  { id: "biography", label: "Biography", icon: "👤" },
]

const popularBooks = [
  { id: "atomic-habits", title: "Atomic Habits", author: "James Clear", cover: "/atomic-habits.webp" },
  {
    id: "thinking-fast",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "/thinking-fast-and-slow.webp",
  },
  { id: "sapiens", title: "Sapiens", author: "Yuval Noah Harari", cover: "/sapiens.webp" },
  { id: "power-of-habit", title: "The Power of Habit", author: "Charles Duhigg", cover: "/the-power-of-habit.webp" },
  {
    id: "7-habits",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    cover: "/7-habits-of-highly.webp",
  },
  { id: "psychology-of-money", title: "The Psychology of Money", author: "Morgan Housel", cover: "/the-psychology-of-money.webp" },
  { id: "intelligent-investor", title: "The Intelligent Investor", author: "Benjamin Graham", cover: "/the-intelligent-investor.webp" },
  {
    id: "subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: "/the-subtle-art-of-not-giving-a-fak.webp",
  },
  { id: "think-and-grow-rich", title: "Think and Grow Rich", author: "Napoleon Hill", cover: "/think-and-grow-rich.webp" },
]

const readingGoals = [
  { id: "5", label: "5 minutes", subtitle: "Quick daily boost" },
  { id: "10", label: "10 minutes", subtitle: "Build a habit" },
  { id: "15", label: "15 minutes", subtitle: "Deep learning" },
  { id: "20", label: "20+ minutes", subtitle: "Power reader" },
]

export default function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedBooks, setSelectedBooks] = useState<string[]>([])
  const [selectedGoal, setSelectedGoal] = useState<string>("")

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const toggleBook = (id: string) => {
    setSelectedBooks((prev) => (prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]))
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const canProceed = () => {
    if (step === 1) return selectedInterests.length >= 3
    if (step === 2) return selectedBooks.length >= 2
    if (step === 3) return selectedGoal !== ""
    return true
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-secondary">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between p-6 max-w-2xl mx-auto w-full">
        <div className="w-full flex-1 flex flex-col items-center justify-center">
          {/* Step 0: Welcome - Blinkist Style */}
          {step === 0 && (
            <div className="text-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
              <div className="relative max-w-md mx-auto overflow-hidden -mx-6">
                <style jsx>{`
                  @keyframes scroll-left {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-33.333%);
                    }
                  }
                  .animate-scroll-slow {
                    animation: scroll-left 40s linear infinite;
                  }
                  .animate-scroll-medium {
                    animation: scroll-left 35s linear infinite;
                  }
                  .animate-scroll-fast {
                    animation: scroll-left 30s linear infinite;
                  }
                `}</style>

                {/* Row 1 - Slow */}
                <div className="flex gap-2 mb-2 animate-scroll-slow">
                  {[...popularBooks.slice(0, 3), ...popularBooks.slice(0, 3), ...popularBooks.slice(0, 3)].map((book, idx) => (
                    <div key={`row1-${idx}`} className="aspect-[2/3] w-24 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md">
                      <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Row 2 - Medium */}
                <div className="flex gap-2 mb-2 animate-scroll-medium">
                  {[...popularBooks.slice(3, 6), ...popularBooks.slice(3, 6), ...popularBooks.slice(3, 6)].map((book, idx) => (
                    <div key={`row2-${idx}`} className="aspect-[2/3] w-24 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md">
                      <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Row 3 - Fast */}
                <div className="flex gap-2 animate-scroll-fast">
                  {[...popularBooks.slice(6, 9), ...popularBooks.slice(6, 9), ...popularBooks.slice(6, 9)].map((book, idx) => (
                    <div key={`row3-${idx}`} className="aspect-[2/3] w-24 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md">
                      <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
              </div>
              {/* Logo/Icon */}
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                  Understand powerful ideas in{" "}
                  <span className="text-primary">15 min</span>
                </h1>
                <p className="text-lg text-muted-foreground text-balance max-w-md mx-auto leading-relaxed">
                  Key insights from nonfiction bestsellers, curated just for you.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Select Interests */}
          {step === 1 && (
            <div className="w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">What interests you?</h2>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Choose at least 3 topics to personalize your experience
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <Card
                    key={interest.id}
                    className={cn(
                      "p-4 cursor-pointer transition-all hover:scale-105 active:scale-95",
                      selectedInterests.includes(interest.id)
                        ? "bg-primary text-primary-foreground border-primary shadow-lg"
                        : "bg-card hover:bg-secondary/50",
                    )}
                    onClick={() => toggleInterest(interest.id)}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className="text-3xl">{interest.icon}</span>
                      <span className="text-sm font-medium leading-tight">{interest.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
              {selectedInterests.length > 0 && (
                <p className="text-center text-sm text-muted-foreground">
                  {selectedInterests.length} selected
                  {selectedInterests.length < 3 && ` • ${3 - selectedInterests.length} more needed`}
                </p>
              )}
            </div>
          )}

          {/* Step 2: Select Books */}
          {step === 2 && (
            <div className="w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Books you've enjoyed?</h2>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Select at least 2 books to help us recommend similar titles
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {popularBooks.map((book) => (
                  <div
                    key={book.id}
                    className={cn(
                      "relative cursor-pointer transition-all hover:scale-105 active:scale-95",
                      selectedBooks.includes(book.id) && "scale-95",
                    )}
                    onClick={() => toggleBook(book.id)}
                  >
                    <div className="relative">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className={cn(
                          "w-full aspect-[2/3] object-cover rounded-lg shadow-md transition-all",
                          selectedBooks.includes(book.id) ? "ring-4 ring-primary" : "ring-1 ring-border",
                        )}
                      />
                      {selectedBooks.includes(book.id) && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="mt-2 space-y-0.5">
                      <h3 className="text-sm font-semibold leading-tight line-clamp-2">{book.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
              {selectedBooks.length > 0 && (
                <p className="text-center text-sm text-muted-foreground">
                  {selectedBooks.length} selected
                  {selectedBooks.length < 2 && ` • ${2 - selectedBooks.length} more needed`}
                </p>
              )}
            </div>
          )}

          {/* Step 3: Reading Goal */}
          {step === 3 && (
            <div className="w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Set your daily goal</h2>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  How much time can you dedicate to reading each day?
                </p>
              </div>
              <div className="space-y-3">
                {readingGoals.map((goal) => (
                  <Card
                    key={goal.id}
                    className={cn(
                      "p-5 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]",
                      selectedGoal === goal.id
                        ? "bg-primary text-primary-foreground border-primary shadow-lg"
                        : "bg-card hover:bg-secondary/50",
                    )}
                    onClick={() => setSelectedGoal(goal.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-semibold text-lg">{goal.label}</div>
                        <div
                          className={cn(
                            "text-sm",
                            selectedGoal === goal.id ? "text-primary-foreground/80" : "text-muted-foreground",
                          )}
                        >
                          {goal.subtitle}
                        </div>
                      </div>
                      <div
                        className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                          selectedGoal === goal.id
                            ? "bg-primary-foreground border-primary-foreground"
                            : "border-muted-foreground",
                        )}
                      >
                        {selectedGoal === goal.id && <Check className="w-4 h-4 text-primary" />}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Completion */}
          {step === 4 && (
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-pulse" />
                  <div className="relative bg-accent/10 p-8 rounded-3xl">
                    <Sparkles className="w-20 h-20 text-accent" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">You're all set!</h2>
                <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-md mx-auto leading-relaxed">
                  Your personalized library is ready. Start your learning journey today.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-6 space-y-3">
                <div className="text-sm text-muted-foreground">Your plan</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Daily goal</span>
                    <span className="font-semibold text-foreground">
                      {readingGoals.find((g) => g.id === selectedGoal)?.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Topics</span>
                    <span className="font-semibold text-foreground">{selectedInterests.length} selected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Favorite books</span>
                    <span className="font-semibold text-foreground">{selectedBooks.length} selected</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="w-full space-y-3 pt-8">
          <Button onClick={handleNext} disabled={!canProceed()} size="lg" className="w-full text-lg h-14 font-semibold">
            {step === 4 ? "Start Reading" : step === 0 ? "Get started" : "Continue"}
          </Button>
          {step > 0 && step < 4 && (
            <Button onClick={handleBack} variant="ghost" size="lg" className="w-full">
              Back
            </Button>
          )}
          {step === 0 && (
            <Button onClick={() => { }} variant="ghost" size="lg" className="w-full">
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
