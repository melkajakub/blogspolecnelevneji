import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  featured = false,
  onClick
}) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
        featured ? 'border-primary shadow-card' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <Badge 
            variant="secondary" 
            className={featured ? 'bg-primary text-primary-foreground' : ''}
          >
            {category}
          </Badge>
          {featured && (
            <Badge variant="outline" className="border-primary text-primary">
              Doporučujeme
            </Badge>
          )}
        </div>
        <h3 className={`font-bold leading-tight hover:text-primary transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-text-light mb-4 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-text-light">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;