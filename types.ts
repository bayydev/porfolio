import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
}