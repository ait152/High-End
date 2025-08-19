import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function AboutPage() {
  const values = [
    {
      title: "Passion",
      description: "We're passionate about helping our clients, our teammates and our business succeed."
    },
    {
      title: "Improvement",
      description: "We constantly look for a better way and challenge each other not to accept the status quo."
    },
    {
      title: "Accountability",
      description: "We take total ownership of our actions and outcomes as individuals, as teams and as a company."
    },
    {
      title: "Transparency",
      description: "We're open and honest with each other, proactively seeking and giving feedback to enable improvement."
    },
    {
      title: "Teamwork",
      description: "We go above and beyond for each other, working to our strengths, asking for help as needed and happily assisting others."
    },
    {
      title: "Simplicity",
      description: "We eliminate everything unnecessary to focus on what's truly important."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">About High End Systems</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted IT partner across Australia, committed to delivering innovative solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl mb-8">Delivering Excellence in IT Solutions</h2>
            </div>

            <Card className="mb-12">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  At High End Systems, we are on the mission to provide the highest quality
                  and most innovative, custom information technology solutions and services
                  with the customer being the number one focus within every service and
                  solution.
                </p>
                
                <h3 className="text-xl mb-4">What does it mean?</h3>
                
                <p className="text-lg leading-relaxed mb-6">
                  Anyone with little IT knowledge can design a solution that "ticks all the
                  boxes". However, is the best and the most cost-efficient solution that
                  perfectly fits your business needs?
                </p>
                
                <p className="text-lg leading-relaxed">
                  At High End Systems, we do not design and sell to fill our quotas. We
                  listen to our customers. We look where their business struggles from IT
                  perspective and where they can use their IT to innovate. We analyse all
                  aspects and components, and we advise based on what customers really need
                  and what helps them to grow their business and to succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                      {value.title.charAt(0)}
                    </div>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Serving Australia</h2>
            <p className="text-xl text-muted-foreground">
              With offices across major Australian cities, we're here to support your business wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {["Sydney", "Melbourne", "Brisbane", "Perth", "Darwin"].map((city) => (
              <div key={city} className="p-6 bg-card rounded-lg border">
                <h3 className="text-lg">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}