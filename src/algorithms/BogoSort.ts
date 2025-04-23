import { Algorithm } from './Algorithm';

export class BogoSort implements Algorithm {
  name = 'Bogo Sort';
  description = 'A highly inefficient sorting algorithm that randomly shuffles the array until it is sorted.';
  timeComplexity = 'O(n * n!) average case, O(1) best case, O(∞) worst case';
  spaceComplexity = 'O(1)';

  private isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }

  private shuffle(arr: number[]): number[] {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  async sort(arr: number[], onStep: (arr: number[]) => Promise<void>): Promise<number[]> {
    let sorted = false;
    let attempts = 0;
    const maxAttempts = 1000; // Limit attempts to prevent infinite loops

    while (!sorted && attempts < maxAttempts) {
      attempts++;
      await onStep([...arr]);
      
      if (this.isSorted(arr)) {
        sorted = true;
      } else {
        arr = this.shuffle(arr);
      }
    }

    if (!sorted) {
      console.warn('BogoSort reached maximum attempts without finding a sorted array');
    }

    return arr;
  }
} 