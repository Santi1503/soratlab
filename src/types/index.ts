export interface Algorithm {
  id: string;
  name: string;
  description: string;
  complexity: {
    best: string;
    average: string;
    worst: string;
  };
  code: {
    java: string;
    python: string;
    php: string;
    javascript: string;
    csharp: string;
  };
}

export interface ArrayState {
  array: number[];
  activeIndices: number[];
  sortedIndices: number[];
  comparingIndices?: number[];
}

export interface SortingState {
  array: number[];
  steps: ArrayState[];
  currentStep: number;
} 