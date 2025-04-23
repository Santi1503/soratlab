export interface ArrayState {
  array: number[];
  activeIndices: number[];
  comparingIndices?: number[];
  sortedIndices: number[];
}

export interface SortingState {
  array: number[];
  steps: ArrayState[];
  currentStep: number;
} 