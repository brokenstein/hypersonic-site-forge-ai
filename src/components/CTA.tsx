
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
              Business Online?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses that have already revolutionized their online presence with Hypersonic. 
            Start your free trial today and see the magic happen.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Schedule Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="text-gray-400 text-sm">
            <p>✨ No credit card required • 14-day free trial • Setup in under 5 minutes</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white ml-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hypersonic
            </span>
          </div>
          <p>&copy; 2024 Hypersonic. All rights reserved. Built with AI-powered innovation.</p>
        </div>
      </footer>
    </section>
  );
};

export default CTA;
