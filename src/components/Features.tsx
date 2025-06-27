
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Palette, Smartphone, BarChart3, Shield, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Creation",
      description: "Describe your business and watch AI build your website in seconds with smart layouts and content.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Palette,
      title: "Smart Design System",
      description: "Professional themes that automatically adapt to your brand colors and industry standards.",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Every website is optimized for mobile, tablet, and desktop with responsive AI layouts.",
      gradient: "from-blue-400 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Built-in Analytics",
      description: "Track your website performance with integrated analytics and conversion insights.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSL certificates, automated backups, and 99.9% uptime.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: Headphones,
      title: "24/7 AI Support",
      description: "Get instant help from our AI assistant or connect with our expert support team anytime.",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Hypersonic?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with beautiful design to give your business 
            the professional online presence it deserves.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
