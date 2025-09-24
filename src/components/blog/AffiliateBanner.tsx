import React from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AffiliateBannerProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  company: string;
}

const AffiliateBanner: React.FC<AffiliateBannerProps> = ({
  title,
  description,
  buttonText,
  href,
  company
}) => {
  return (
    <Card className="p-6 bg-banner-bg border-l-4 border-l-primary">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <span className="text-xs text-text-light bg-muted px-2 py-1 rounded">
              {company}
            </span>
          </div>
          <p className="text-sm text-text-light leading-relaxed">
            {description}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-light text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
        >
          <span>{buttonText}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
};

export default AffiliateBanner;