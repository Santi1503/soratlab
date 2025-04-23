export interface Algorithm {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  sort(arr: number[], onStep: (arr: number[]) => Promise<void>): Promise<number[]>;
} 