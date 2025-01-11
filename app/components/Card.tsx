import React from 'react';
import { cn } from '../utils/cn';

export const Card = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      "rounded-2xl border-2 bg-white shadow-lg transition-all duration-300",
      "hover:scale-105 hover:shadow-xl",
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

