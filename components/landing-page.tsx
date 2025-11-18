"use client"

import { useState, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Clock, Sparkles, TrendingUp, Users, Zap, Check, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import OnboardingFlow from "@/components/onboarding-flow"

const popularBooks1 = [
  { id: "atomic-habits", title: "Atomic Habits", author: "James Clear", cover: "/atomic-habits.png" },
  { id: "thinking-fast", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "/thinking-fast-and-slow.png" },
  { id: "sapiens", title: "Sapiens", author: "Yuval Noah Harari", cover: "/sapiens.png" },
  { id: "power-of-habit", title: "The Power of Habit", author: "Charles Duhigg", cover: "/the-power-of-habit.png" },
  { id: "7-habits", title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", cover: "/7-habits-of-highly.png" },
  { id: "psychology-of-money", title: "The Psychology of Money", author: "Morgan Housel", cover: "/the-psychology-of-money.png" },
  { id: "intelligent-investor", title: "The Intelligent Investor", author: "Benjamin Graham", cover: "/the-intelligent-investor.png" },
]

const popularBooks2 = [
  { id: "subtle-art", title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", cover: "/the-subtle-art-of-not-giving-a-fak.png" },
  { id: "think-and-grow-rich", title: "Think and Grow Rich", author: "Napoleon Hill", cover: "/think-and-grow-rich.png" },
  { id: "lean-startup", title: "The Lean Startup", author: "Eric Ries", cover: "/the-lean-startup.png" },
  { id: "black-swan", title: "The Black Swan", author: "Nassim Taleb", cover: "/the-black-swan.png" },
  { id: "tipping-point", title: "The Tipping Point", author: "Malcolm Gladwell", cover: "/the-tipping-point.png" },
  { id: "good-to-great", title: "Good to Great", author: "Jim Collins", cover: "/good-to-great.png" },
  { id: "how-to-win-friends", title: "How to Win Friends and Influence People", author: "Dale Carnegie", cover: "/how-to-win-friends.png" },
]

const popularBooks3 = [
  { id: "body-keeps-score", title: "The Body Keeps the Score", author: "Bessel van der Kolk", cover: "/the-body-keeps-the-score.png" },
  { id: "quiet", title: "Quiet", author: "Susan Cain", cover: "/quiet.png" },
  { id: "cosmos", title: "Cosmos", author: "Carl Sagan", cover: "/cosmos.png" },
  { id: "selfish-gene", title: "The Selfish Gene", author: "Richard Dawkins", cover: "/the-selfish-gene.png" },
  { id: "brief-history-time", title: "A Brief History of Time", author: "Stephen Hawking", cover: "/A-Brief-History-of-Time.png" },
  { id: "being-mortal", title: "Being Mortal", author: "Atul Gawande", cover: "/being-mortal.png" },
  { id: "invisible-women", title: "Invisible Women", author: "Caroline Criado Perez", cover: "/invisible-women.png" },
]

const features = [
  {
    icon: Clock,
    title: "15-Minute Summaries",
    description: "Get the key insights from bestselling books in just 15 minutes of reading or listening.",
  },
  {
    icon: Sparkles,
    title: "Curated Library",
    description: "Access hundreds of summaries from the world's best nonfiction books.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Set daily reading goals and watch your knowledge grow with detailed insights.",
  },
  {
    icon: Users,
    title: "Personalized recommendations",
    description: "Enjoy daily content collections tailored to your needs",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content: "This app has transformed how I learn. I've finished more books in 3 months than I did all last year.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "The perfect solution for busy professionals. I finally have time to keep learning without sacrificing my schedule.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The quality of summaries is outstanding. It's like having a personal librarian who knows exactly what I need.",
    rating: 5,
  },
]

// Stats removed for pre-launch
// const stats = [
//   { value: "21+", label: "Summaries at launch" },
//   { value: "15 min", label: "Per summary" },
//   { value: "iOS & Android", label: "Mobile apps" },
//   { value: "Free", label: "Early access" },
// ]

const MarqueeRow = memo(function MarqueeRow({ items, speed }: { items: typeof popularBooks1, speed: number }) {
  return (
    <div className="marquee overflow-hidden w-full flex h-40 lg:h-52">
      <div
        className="marquee-track flex flex-shrink-0"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="marquee__group flex gap-3 lg:gap-4 flex-shrink-0 pr-3 lg:pr-4">
          {items.map((book, idx) => (
            <div key={`a-${idx}`} className="flex-shrink-0 transition-transform hover:scale-105">
              <img
                src={book.cover}
                alt={book.title}
                className="w-24 lg:w-32 aspect-[2/3] rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="marquee__group flex gap-3 lg:gap-4 flex-shrink-0 pr-3 lg:pr-4" aria-hidden="true">
          {items.map((book, idx) => (
            <div key={`b-${idx}`} className="flex-shrink-0 transition-transform hover:scale-105">
              <img
                src={book.cover}
                alt={book.title}
                className="w-24 lg:w-32 aspect-[2/3] rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default function LandingPage() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (showOnboarding) {
    return <OnboardingFlow />
  }

  const row1 = popularBooks1
  const row2 = popularBooks2
  const row3 = popularBooks3

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://sheetdb.io/api/v1/erea0rnfbkrw3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email,
            date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
          }
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .marquee {
          overflow: hidden;
          display: flex;
          width: 100%;
        }
        .marquee__group {
          display: flex;
          flex-shrink: 0;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll 20s linear infinite;
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          transform: translate3d(0,0,0);
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Readsome</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              {/* <Button size="sm" onClick={() => setShowOnboarding(true)}>
                Get Started
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </a>
                {/* <Button variant="ghost" size="sm" className="justify-start">
                  Log in
                </Button> */}
                {/* <Button size="sm" onClick={() => setShowOnboarding(true)}>
                  Get Started
                </Button> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Mobile Only - Books at Top */}
          <div className="lg:hidden mb-8">
            <MarqueeRow items={row1} speed={25} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Join 10M+ readers worldwide</span>
              </div> */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Master powerful ideas in <span className="text-primary">15 minutes</span>
              </h1>

              <p className="text-lg xl:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Discover key insights from the world's best nonfiction books and. Learn faster, remember more, and transform your life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg h-14 px-8 font-semibold"
                  onClick={() => {
                    document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Join Waitlist
                </Button>
              </div>

              {/* Stats - Removed for pre-launch */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Desktop Only - Right Column Marquee Books */}
            <div className="relative hidden lg:block space-y-6 overflow-hidden">
              <MarqueeRow items={row1} speed={25} />
              <MarqueeRow items={row2} speed={22} />
              <MarqueeRow items={row3} speed={30} />

              {/* Gradient overlays for seamless blending */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Why readers love Readsome</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Everything you need to build a daily learning habit and expand your knowledge
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 xl:p-8 hover:shadow-lg transition-shadow bg-card text-center flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Start learning in 3 simple steps</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Get started with Readsome and transform the way you learn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 xl:gap-12 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Choose Your Interests", description: "Select topics you care about and we'll personalize your library" },
              { step: "2", title: "Set Your Goals", description: "Decide how much time you want to spend learning each day" },
              { step: "3", title: "Start Reading", description: "Enjoy bite-sized summaries you can finish in 15 minutes" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                )}
                <div className="relative z-10 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button size="lg" className="text-lg h-14 px-8 font-semibold" onClick={() => setShowOnboarding(true)}>
              Get Started Now
            </Button>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Loved by readers worldwide</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              See what our community has to say about their learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 xl:gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 xl:p-8 space-y-4 bg-card">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join the Waitlist Section */}
      <section id="join-waitlist" className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Join the Waitlist</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                Be among the first to experience Readsome. Get early access and exclusive updates when we launch.
              </p>
            </div>

            <Card className="p-6 md:p-8 bg-card">
              <form className="space-y-4" onSubmit={handleWaitlistSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
                  />
                  <Button size="lg" type="submit" disabled={isSubmitting} className="text-lg h-12 px-8 font-semibold whitespace-nowrap">
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </Button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-sm text-primary font-medium">
                    ✓ Thanks! You've been added to the waitlist.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </Card>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Early access benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Exclusive updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Special launch pricing</span>
              </div>
            </div>

            {/* Coming Soon - App Stores */}
            <div className="pt-8 space-y-4">
              <p className="text-lg font-semibold text-muted-foreground">Coming soon to</p>
              <div className="flex items-center justify-center gap-4">
                {/* Apple App Store Badge */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-not-allowed opacity-75">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">App Store</div>
                  </div>
                </div>

                {/* Google Play Store Badge */}
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-not-allowed opacity-75">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-4 gap-8 xl:gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Readsome</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering readers to learn faster and smarter with bite-sized book summaries.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Library", "Mobile App"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Privacy", "Terms"],
              },
            ].map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-semibold">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Readsome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}