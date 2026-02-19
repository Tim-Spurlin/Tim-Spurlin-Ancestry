export interface LineageContent {
  title: string;
  subtitle: string;
  color: string; // 'blue' | 'green' | 'red' | 'stone'
  contentPoints: {
    index: number;
    title: string;
    description: string;
    badgeColor: string;
  }[];
  timeline: {
    year: string;
    location: string;
    description: string;
  }[];
  sideBoxTitle: string;
  sideBoxContent?: string;
}

export type LineageKey = 'france' | 'ireland' | 'england' | 'scotland';

export interface TreeNodeData {
  name: string;
  title: string;
  date?: string;
  info?: string;
  type: 'self' | 'parent' | 'ancestor' | 'root' | 'relative';
  children?: TreeNodeData[];
}
