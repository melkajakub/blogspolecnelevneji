import React from 'react';
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo a popis */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-hero-gradient">
                <div className="h-5 w-5 rounded-full border-2 border-white/80" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Společně levněji</h3>
                <p className="text-sm text-text-light -mt-1">blog</p>
              </div>
            </div>
            <p className="text-sm text-text-light leading-relaxed">
              Praktické rady a tipy, jak ušetřit na energiích bez složitého papírování.
            </p>
          </div>

          {/* Užitečné odkazy */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Užitečné odkazy</h4>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block text-sm text-text-light hover:text-primary transition-colors"
              >
                Všechny články
              </a>
              <a 
                href="#uspory" 
                className="block text-sm text-text-light hover:text-primary transition-colors"
              >
                Tipy na úspory
              </a>
              <a 
                href="#distribuci" 
                className="block text-sm text-text-light hover:text-primary transition-colors"
              >
                Distribuční sazby
              </a>
            </div>
          </div>

          {/* Hlavní web a CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Začněte šetřit už dnes</h4>
            <p className="text-sm text-text-light leading-relaxed">
              Společně levněji – pomáháme českým domácnostem dlouhodobě šetřit na energiích.
            </p>
            <a
              href="https://www.spolecnelevneji.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-light font-medium text-sm transition-colors"
            >
              <span>Navštívit hlavní web</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-light">
              © 2024 Společně levněji. Všechna práva vyhrazena.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.spolecnelevneji.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-text-light hover:text-primary transition-colors"
              >
                Objednat službu
              </a>
              <a 
                href="#kontakt" 
                className="text-xs text-text-light hover:text-primary transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;