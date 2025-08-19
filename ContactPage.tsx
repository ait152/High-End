import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ContactPage() {
  const locations = [
    {
      city: "Sydney",
      address: "34 Oxford Street, Paddington, NSW 2025",
      phone: "02 9378 0834",
      email: "sydney.support@hes.com.au"
    },
    {
      city: "Melbourne",
      address: "399 Lonsdale Street, Melbourne, VIC 3000",
      phone: "03 9928 8785",
      email: "melbourne.support@hes.com.au"
    },
    {
      city: "Brisbane",
      address: "222 Elizabeth Street, Brisbane City, QLD 4000",
      phone: "07 3437 8000",
      email: "brisbane.support@hes.com.au"
    },
    {
      city: "Darwin",
      address: "12 Searcy Street, Darwin City, NT 0800",
      phone: "08 8982 0001",
      email: "darwin.support@hes.com.au"
    },
    {
      city: "Perth",
      address: "38 Mill Street, Perth, WA 6000",
      phone: "08 9216 3000",
      email: "perth.support@hes.com.au"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team across Australia. We're here to help with all your IT needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Contact Form</Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Start Your IT Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge IT solutions? Fill out our contact form and let's discuss your requirements.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* General Enquiry Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">General Enquiries</Badge>
            <h2 className="text-3xl mb-4">Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              For general enquiries and new business opportunities, reach out to us directly.
            </p>
            <div className="inline-flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" />
              <a href="mailto:info@hes.com.au" className="text-primary hover:underline">
                info@hes.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground">
              Find the High End Systems office nearest to you across Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm">{location.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`mailto:${location.email}`}
                      className="text-sm text-primary hover:underline break-all"
                    >
                      {location.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl mb-6">Support Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 emergency technical support available for critical business systems and infrastructure issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}