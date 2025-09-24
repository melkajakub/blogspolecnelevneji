import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink } from "lucide-react";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  date,
  readTime,
  category
}) => {
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const formatted = [];
    let currentSection = [];
    
    for (const line of lines) {
      if (line.startsWith('### ')) {
        if (currentSection.length > 0) {
          formatted.push(currentSection.join('\n'));
          currentSection = [];
        }
        formatted.push(`<h3>${line.substring(4)}</h3>`);
      } else if (line.startsWith('- ')) {
        currentSection.push(`<li>${line.substring(2)}</li>`);
      } else if (line.trim() === '') {
        if (currentSection.length > 0) {
          formatted.push(currentSection.join('\n'));
          currentSection = [];
        }
        formatted.push('<br>');
      } else if (line.includes('**') && line.includes('**')) {
        const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        currentSection.push(`<p>${boldFormatted}</p>`);
      } else if (line.trim() !== '') {
        currentSection.push(`<p>${line}</p>`);
      }
    }
    
    if (currentSection.length > 0) {
      formatted.push(currentSection.join('\n'));
    }
    
    return formatted.join('\n');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="secondary">{category}</Badge>
            <div className="flex items-center space-x-4 text-sm text-text-light">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          <DialogTitle className="text-2xl leading-tight">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <div 
            className="prose prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(content) }}
            style={{
              lineHeight: '1.7',
            }}
          />
          
          <div className="mt-8 p-6 bg-hero-gradient rounded-lg text-white">
            <h4 className="font-bold text-lg mb-2">Začněte šetřit už dnes</h4>
            <p className="text-white/90 mb-4">
              Nechte nás hlídat vaše energie a vyjednat nejlepší ceny. 
              První rok ZDARMA, pokud nenajdeme úsporu!
            </p>
            <Button 
              asChild 
              className="bg-white text-primary hover:bg-white/90"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;