
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white ml-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hypersonic
          </h1>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Stunning Websites with
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent block mt-2">
            AI-Powered Magic
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your business ideas into professional websites in minutes. 
          No coding required - just describe your vision and watch AI create your perfect site.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            Start Building Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
            Watch Demo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="text-gray-400 text-sm">
          <p className="mb-4">Trusted by 10,000+ small businesses worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-50"></div>
            <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-50"></div>
            <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-50"></div>
            <div className="w-16 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
