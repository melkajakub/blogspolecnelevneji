import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BlogFooter = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/spolecnelevneji-logo.png" 
                alt="Logo Společně levněji - služba pro úspory na energiích" 
                className="h-8 w-8"
                loading="lazy"
                width="32"
                height="32"
              />
              <div>
                <h3 className="font-bold text-foreground">Společně levněji</h3>
                <p className="text-sm text-text-light">blog</p>
              </div>
            </div>
            <p className="text-sm text-text-light leading-relaxed">
              Pomáháme českým domácnostem ušetřit na energiích díky profesionálnímu 
              vyjednávání a dlouhodobému hlídání nejlepších cen.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Užitečné odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#clanky" className="text-text-light hover:text-primary transition-colors">
                  Všechny články
                </a>
              </li>
              <li>
                <a href="#o-blogu" className="text-text-light hover:text-primary transition-colors">
                  O blogu
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Začněte šetřit</h4>
            <p className="text-sm text-text-light">
              Navštivte hlavní web a objednejte si naše služby pro dlouhodobé úspory.
            </p>
            <Button asChild className="w-full md:w-auto">
              <a 
                href="https://www.spolecnelevneji.cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <span>Hlavní web</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-light">
          <p>&copy; 2024 Společně levněji. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://www.spolecnelevneji.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Objednat službu
            </a>
            <a 
              href="https://www.spolecnelevneji.cz/kontakt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;