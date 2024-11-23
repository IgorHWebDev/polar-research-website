export function StatsSection() {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-muted-foreground">Lives Impacted</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-muted-foreground">Global Partners</div>
          </div>
        </div>
      </div>
    </div>
  )
}
