export function SermonsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sermons & Teachings</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover God's word through our collection of inspiring sermons, biblical teachings, and spiritual insights
          from our pastoral team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/live"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Watch Live Service
          </a>
          <a
            href="#latest"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            Latest Sermon
          </a>
        </div>
      </div>
    </section>
  )
}
