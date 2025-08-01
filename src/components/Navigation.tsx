import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-dragon bg-clip-text text-transparent">
            DraQu
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              Play
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              Lore
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              Creatures
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              Community
            </Button>
          </div>
          
          {/* CTA Button */}
          <Button variant="mystic" className="hidden md:inline-flex">
            Get Early Access
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;