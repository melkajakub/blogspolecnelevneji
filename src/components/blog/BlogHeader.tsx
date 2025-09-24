import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BlogHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/spolecnelevneji-logo.png" 
            alt="Společně levněji logo" 
            className="h-10 w-10"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">Společně levněji</h1>
            <p className="text-sm text-text-light -mt-1">blog</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#clanky" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Články
          </a>
          <a href="#o-blogu" className="text-sm font-medium text-text-light hover:text-primary transition-colors">
            O blogu
          </a>
        </nav>

        <Button 
          asChild 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        >
          <a 
            href="https://www.spolecnelevneji.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span>Objednat službu</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default BlogHeader;