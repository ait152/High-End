import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const services = [
    {
      title: "App Development",
      description: "Custom mobile and web applications tailored to your business needs, built with the latest technologies and best practices.",
      image: "https:/https://imgur.com/a/23gjGfL.jpg"
    },
    {
      title: "Technical Support",
      description: "24/7 technical support for all your IT infrastructure, ensuring minimal downtime and maximum productivity.",
      image: "https://imgur.com/a/X5WRQSI.jpg"
    },
    {
      title: "Software Support",
      description: "Comprehensive software maintenance, updates, and troubleshooting to keep your systems running smoothly.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1NTU0ODg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Internet & Database Services",
      description: "Robust network infrastructure and database management solutions for secure and efficient data handling.",
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlcnMlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc1NTU3NjA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help your business leverage technology for growth and competitive advantage.",
      image: "https://images.unsplash.com/photo-1599453052061-5c377643e4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NTU1NzYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            High End Systems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Providing the highest quality and most innovative custom information technology solutions across Australia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 rounded-full">Sydney</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Melbourne</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Brisbane</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Perth</span>
            <span className="px-4 py-2 bg-white/20 rounded-full">Darwin</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive IT solutions designed to help your business succeed in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to discuss how we can help you achieve your IT goals.
          </p>
          <div className="text-lg">
            <p>General Enquiries: <a href="mailto:info@hes.com.au" className="text-primary hover:underline">info@hes.com.au</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}