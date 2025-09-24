import React from 'react';
import { Button } from "@/components/ui/button";

const BlogHero = () => {
  return (
    <section className="relative py-20 bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Společně levněji blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Praktické rady, jak ušetřit na energiích a platit férové ceny
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              <a href="#clanky">Číst články</a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              <a 
                href="https://www.spolecnelevneji.cz" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Začít šetřit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;