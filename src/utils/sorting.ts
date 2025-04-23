import { ArrayState, SortingState } from '../types';

export const bubbleSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...arr],
        activeIndices: [j, j + 1],
        sortedIndices: Array.from({ length: i }, (_, k) => n - 1 - k),
        comparingIndices: [j, j + 1],
      });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          activeIndices: [j, j + 1],
          sortedIndices: Array.from({ length: i }, (_, k) => n - 1 - k),
          comparingIndices: [j, j + 1],
        });
      }
    }
  }

  return {
    array: arr,
    steps,
    currentStep: 0,
  };
};

export const quickSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const arr = [...array];

  const partition = (low: number, high: number): number => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      steps.push({
        array: [...arr],
        activeIndices: [j, high],
        sortedIndices: [],
        comparingIndices: [j, high],
      });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({
          array: [...arr],
          activeIndices: [i, j],
          sortedIndices: [],
          comparingIndices: [i, j],
        });
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({
      array: [...arr],
      activeIndices: [i + 1, high],
      sortedIndices: [],
      comparingIndices: [i + 1, high],
    });

    return i + 1;
  };

  const sort = (low: number, high: number) => {
    if (low < high) {
      const pi = partition(low, high);
      sort(low, pi - 1);
      sort(pi + 1, high);
    }
  };

  sort(0, arr.length - 1);

  return {
    array: arr,
    steps,
    currentStep: 0,
  };
};

export const mergeSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const arr = [...array];

  const merge = (left: number[], right: number[], start: number): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      steps.push({
        array: [...arr],
        activeIndices: [start + leftIndex, start + left.length + rightIndex],
        sortedIndices: [],
        comparingIndices: [start + leftIndex, start + left.length + rightIndex],
      });

      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const sort = (arr: number[], start = 0): number[] => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(sort(left, start), sort(right, start + middle), start);
  };

  const sorted = sort(arr);
  for (let i = 0; i < sorted.length; i++) {
    arr[i] = sorted[i];
    steps.push({
      array: [...arr],
      activeIndices: [i],
      sortedIndices: Array.from({ length: i }, (_, k) => k),
      comparingIndices: [i],
    });
  }

  return {
    array: arr,
    steps,
    currentStep: 0,
  };
};

export const insertionSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      steps.push({
        array: [...arr],
        activeIndices: [j - 1, j],
        sortedIndices: Array.from({ length: i }, (_, k) => k),
        comparingIndices: [j - 1, j],
      });

      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;

      steps.push({
        array: [...arr],
        activeIndices: [j, j + 1],
        sortedIndices: Array.from({ length: i }, (_, k) => k),
        comparingIndices: [j, j + 1],
      });
    }
  }

  return {
    array: arr,
    steps,
    currentStep: 0,
  };
};

export const selectionSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      steps.push({
        array: [...arr],
        activeIndices: [minIndex, j],
        sortedIndices: Array.from({ length: i }, (_, k) => k),
        comparingIndices: [minIndex, j],
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      steps.push({
        array: [...arr],
        activeIndices: [i, minIndex],
        sortedIndices: Array.from({ length: i + 1 }, (_, k) => k),
        comparingIndices: [i, minIndex],
      });
    }
  }

  return {
    array: arr,
    steps,
    currentStep: 0,
  };
};

export const heapSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];

  const heapify = (arr: number[], n: number, i: number, steps: ArrayState[]) => {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push({
        array: [...arr],
        activeIndices: [i, largest],
        comparingIndices: [l, r],
        sortedIndices: []
      });
      heapify(arr, n, largest, steps);
    }
  };

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, steps);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    steps.push({
      array: [...arr],
      activeIndices: [0, i],
      comparingIndices: [],
      sortedIndices: Array.from({ length: n - i }, (_, j) => i + j)
    });
    heapify(arr, i, 0, steps);
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const shellSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
        steps.push({
          array: [...arr],
          activeIndices: [j, j - gap],
          comparingIndices: [i, j - gap],
          sortedIndices: []
        });
      }
      arr[j] = temp;
      steps.push({
        array: [...arr],
        activeIndices: [j, i],
        comparingIndices: [i, j],
        sortedIndices: []
      });
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const countingSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(n);

  // Count occurrences
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
    steps.push({
      array: [...arr],
      activeIndices: [i],
      comparingIndices: [arr[i]],
      sortedIndices: []
    });
  }

  // Modify count[i] to store position
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Build output array
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
    steps.push({
      array: [...output],
      activeIndices: [count[arr[i]]],
      comparingIndices: [arr[i]],
      sortedIndices: []
    });
  }

  steps.push({
    array: [...output],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: output,
    steps,
    currentStep: 0
  };
};

export const radixSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  let arr = [...array];
  const max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
      steps.push({
        array: [...arr],
        activeIndices: [i],
        comparingIndices: [Math.floor(arr[i] / exp) % 10],
        sortedIndices: []
      });
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
      steps.push({
        array: [...output],
        activeIndices: [count[digit]],
        comparingIndices: [digit],
        sortedIndices: []
      });
    }

    arr = output;
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const bucketSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketSize = 5;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < n; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
    steps.push({
      array: [...arr],
      activeIndices: [i],
      comparingIndices: [bucketIndex],
      sortedIndices: []
    });
  }

  let index = 0;
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b);
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
      steps.push({
        array: [...arr],
        activeIndices: [index - 1],
        comparingIndices: [i, j],
        sortedIndices: []
      });
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const cocktailSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  let swapped = true;
  let start = 0;
  let end = n - 1;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        steps.push({
          array: [...arr],
          activeIndices: [i, i + 1],
          comparingIndices: [],
          sortedIndices: []
        });
      }
    }

    if (!swapped) break;

    swapped = false;
    end--;

    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        steps.push({
          array: [...arr],
          activeIndices: [i, i + 1],
          comparingIndices: [],
          sortedIndices: []
        });
      }
    }

    start++;
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const gnomeSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  let index = 0;

  while (index < n) {
    if (index === 0) {
      index++;
    }
    if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      steps.push({
        array: [...arr],
        activeIndices: [index, index - 1],
        comparingIndices: [],
        sortedIndices: []
      });
      index--;
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const combSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  let gap = n;
  let swapped = true;
  const shrink = 1.3;

  while (gap > 1 || swapped) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) gap = 1;
    swapped = false;

    for (let i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
        steps.push({
          array: [...arr],
          activeIndices: [i, i + gap],
          comparingIndices: [],
          sortedIndices: []
        });
      }
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const cycleSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];

  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;

    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }

    if (pos === cycleStart) continue;

    while (item === arr[pos]) {
      pos++;
    }

    [item, arr[pos]] = [arr[pos], item];
    steps.push({
      array: [...arr],
      activeIndices: [cycleStart, pos],
      comparingIndices: [],
      sortedIndices: []
    });

    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }

      while (item === arr[pos]) {
        pos++;
      }

      [item, arr[pos]] = [arr[pos], item];
      steps.push({
        array: [...arr],
        activeIndices: [cycleStart, pos],
        comparingIndices: [],
        sortedIndices: []
      });
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const pancakeSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];

  const flip = (k: number) => {
    let start = 0;
    while (start < k) {
      [arr[start], arr[k]] = [arr[k], arr[start]];
      start++;
      k--;
    }
    steps.push({
      array: [...arr],
      activeIndices: [start, k],
      comparingIndices: [],
      sortedIndices: []
    });
  };

  for (let currSize = n; currSize > 1; currSize--) {
    let mi = 0;
    for (let i = 0; i < currSize; i++) {
      if (arr[i] > arr[mi]) {
        mi = i;
      }
    }

    if (mi !== currSize - 1) {
      flip(mi);
      flip(currSize - 1);
    }
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

export const bogoSort = (array: number[]): SortingState => {
  const steps: ArrayState[] = [];
  const n = array.length;
  const arr = [...array];
  let attempts = 0;
  const maxAttempts = 1000; // Para evitar bucles infinitos

  const isSorted = (arr: number[]): boolean => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  };

  const shuffle = (arr: number[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  while (!isSorted(arr) && attempts < maxAttempts) {
    steps.push({
      array: [...arr],
      activeIndices: Array.from({ length: n }, (_, i) => i),
      comparingIndices: [],
      sortedIndices: []
    });

    shuffle(arr);
    attempts++;
  }

  steps.push({
    array: [...arr],
    activeIndices: [],
    comparingIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i)
  });

  return {
    array: arr,
    steps,
    currentStep: 0
  };
};

// Aquí se pueden agregar más algoritmos de ordenación... 