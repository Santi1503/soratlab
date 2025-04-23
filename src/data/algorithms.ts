export interface Algorithm {
  id: string;
  name: string;
  description: string;
  complexity: string;
  code: {
    java: string;
    python: string;
    php: string;
    javascript: string;
    csharp: string;
  };
}

export const algorithms: Algorithm[] = [
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    description: 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.',
    complexity: 'Best: O(n), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void bubbleSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}`,
      python: `def bubble_sort(arr):
  n = len(arr)
  for i in range(n):
    for j in range(0, n-i-1):
      if arr[j] > arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]`,
      php: `function bubbleSort(&$arr) {
  $n = count($arr);
  for ($i = 0; $i < $n-1; $i++) {
    for ($j = 0; $j < $n-$i-1; $j++) {
      if ($arr[$j] > $arr[$j+1]) {
        $temp = $arr[$j];
        $arr[$j] = $arr[$j+1];
        $arr[$j+1] = $temp;
      }
    }
  }
}`,
      javascript: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}`,
      csharp: `public void BubbleSort(int[] arr) {
  int n = arr.Length;
  for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}`
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    description: 'A divide and conquer algorithm that works by selecting a pivot element and partitioning the array around the pivot.',
    complexity: 'Best: O(n log n), Average: O(n log n), Worst: O(n²)',
    code: {
      java: `public void quickSort(int[] arr, int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }
}

private int partition(int[] arr, int low, int high) {
  int pivot = arr[high];
  int i = (low-1);
  for (int j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  int temp = arr[i+1];
  arr[i+1] = arr[high];
  arr[high] = temp;
  return i+1;
}`,
      python: `def quick_sort(arr, low, high):
  if low < high:
    pi = partition(arr, low, high)
    quick_sort(arr, low, pi-1)
    quick_sort(arr, pi+1, high)

def partition(arr, low, high):
  pivot = arr[high]
  i = low - 1
  for j in range(low, high):
    if arr[j] < pivot:
      i += 1
      arr[i], arr[j] = arr[j], arr[i]
  arr[i+1], arr[high] = arr[high], arr[i+1]
  return i+1`,
      php: `function quickSort($arr, $low, $high) {
  if ($low < $high) {
    $pi = partition($arr, $low, $high);
    quickSort($arr, $low, $pi-1);
    quickSort($arr, $pi+1, $high);
  }
  return $arr;
}

function partition($arr, $low, $high) {
  $pivot = $arr[$high];
  $i = $low - 1;
  for ($j = $low; $j < $high; $j++) {
    if ($arr[$j] < $pivot) {
      $i++;
      $temp = $arr[$i];
      $arr[$i] = $arr[$j];
      $arr[$j] = $temp;
    }
  }
  $temp = $arr[$i+1];
  $arr[$i+1] = $arr[$high];
  $arr[$high] = $temp;
  return $i+1;
}`,
      javascript: `function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}`,
      csharp: `public void QuickSort(int[] arr, int low, int high) {
  if (low < high) {
    int pi = Partition(arr, low, high);
    QuickSort(arr, low, pi-1);
    QuickSort(arr, pi+1, high);
  }
}

private int Partition(int[] arr, int low, int high) {
  int pivot = arr[high];
  int i = low - 1;
  for (int j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  int temp = arr[i+1];
  arr[i+1] = arr[high];
  arr[high] = temp;
  return i+1;
}`
    }
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    description: 'A divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.',
    complexity: 'Best: O(n log n), Average: O(n log n), Worst: O(n log n)',
    code: {
      java: `public void mergeSort(int[] arr, int left, int right) {
  if (left < right) {
    int middle = (left + right) / 2;
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);
  }
}

private void merge(int[] arr, int left, int middle, int right) {
  int n1 = middle - left + 1;
  int n2 = right - middle;
  int[] L = new int[n1];
  int[] R = new int[n2];
  
  for (int i = 0; i < n1; i++)
    L[i] = arr[left + i];
  for (int j = 0; j < n2; j++)
    R[j] = arr[middle + 1 + j];
    
  int i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}`,
      python: `def merge_sort(arr):
  if len(arr) > 1:
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    
    merge_sort(left)
    merge_sort(right)
    
    i = j = k = 0
    while i < len(left) and j < len(right):
      if left[i] < right[j]:
        arr[k] = left[i]
        i += 1
      else:
        arr[k] = right[j]
        j += 1
      k += 1
      
    while i < len(left):
      arr[k] = left[i]
      i += 1
      k += 1
      
    while j < len(right):
      arr[k] = right[j]
      j += 1
      k += 1`,
      php: `function mergeSort($arr) {
  if (count($arr) <= 1) return $arr;
  
  $mid = floor(count($arr) / 2);
  $left = array_slice($arr, 0, $mid);
  $right = array_slice($arr, $mid);
  
  $left = mergeSort($left);
  $right = mergeSort($right);
  
  return merge($left, $right);
}

function merge($left, $right) {
  $result = [];
  $i = $j = 0;
  
  while ($i < count($left) && $j < count($right)) {
    if ($left[$i] <= $right[$j]) {
      $result[] = $left[$i];
      $i++;
    } else {
      $result[] = $right[$j];
      $j++;
    }
  }
  
  while ($i < count($left)) {
    $result[] = $left[$i];
    $i++;
  }
  
  while ($j < count($right)) {
    $result[] = $right[$j];
    $j++;
  }
  
  return $result;
}`,
      javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
      csharp: `public void MergeSort(int[] arr, int left, int right) {
  if (left < right) {
    int middle = (left + right) / 2;
    MergeSort(arr, left, middle);
    MergeSort(arr, middle + 1, right);
    Merge(arr, left, middle, right);
  }
}

private void Merge(int[] arr, int left, int middle, int right) {
  int n1 = middle - left + 1;
  int n2 = right - middle;
  int[] L = new int[n1];
  int[] R = new int[n2];
  
  for (int i = 0; i < n1; i++)
    L[i] = arr[left + i];
  for (int j = 0; j < n2; j++)
    R[j] = arr[middle + 1 + j];
    
  int i = 0, j = 0, k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}`
    }
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    description: 'A simple sorting algorithm that builds the final sorted array one item at a time.',
    complexity: 'Best: O(n), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void insertionSort(int[] arr) {
  int n = arr.length;
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}`,
      python: `def insertion_sort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = key`,
      php: `function insertionSort($arr) {
  $n = count($arr);
  for ($i = 1; $i < $n; $i++) {
    $key = $arr[$i];
    $j = $i - 1;
    while ($j >= 0 && $arr[$j] > $key) {
      $arr[$j + 1] = $arr[$j];
      $j = $j - 1;
    }
    $arr[$j + 1] = $key;
  }
  return $arr;
}`,
      javascript: `function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}`,
      csharp: `public void InsertionSort(int[] arr) {
  int n = arr.Length;
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}`
    }
  },
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    description: 'A sorting algorithm that repeatedly finds the minimum element from the unsorted part and puts it at the beginning.',
    complexity: 'Best: O(n²), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void selectionSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n-1; i++) {
    int min_idx = i;
    for (int j = i+1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}`,
      python: `def selection_sort(arr):
  n = len(arr)
  for i in range(n):
    min_idx = i
    for j in range(i+1, n):
      if arr[j] < arr[min_idx]:
        min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
      php: `function selectionSort($arr) {
  $n = count($arr);
  for ($i = 0; $i < $n-1; $i++) {
    $min_idx = $i;
    for ($j = $i+1; $j < $n; $j++) {
      if ($arr[$j] < $arr[$min_idx]) {
        $min_idx = $j;
      }
    }
    $temp = $arr[$min_idx];
    $arr[$min_idx] = $arr[$i];
    $arr[$i] = $temp;
  }
  return $arr;
}`,
      javascript: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    let min_idx = i;
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
}`,
      csharp: `public void SelectionSort(int[] arr) {
  int n = arr.Length;
  for (int i = 0; i < n-1; i++) {
    int min_idx = i;
    for (int j = i+1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}`
    }
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    description: 'A comparison-based sorting algorithm that uses a binary heap data structure to sort elements.',
    complexity: 'Best: O(n log n), Average: O(n log n), Worst: O(n log n)',
    code: {
      java: `public void heapSort(int[] arr) {
  int n = arr.length;
  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(arr, n, i);
  for (int i = n - 1; i > 0; i--) {
    int temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
}

private void heapify(int[] arr, int n, int i) {
  int largest = i;
  int l = 2 * i + 1;
  int r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest])
    largest = l;
  if (r < n && arr[r] > arr[largest])
    largest = r;
  if (largest != i) {
    int swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    heapify(arr, n, largest);
  }
}`,
      python: `def heapify(arr, n, i):
  largest = i
  l = 2 * i + 1
  r = 2 * i + 2
  if l < n and arr[i] < arr[l]:
    largest = l
  if r < n and arr[largest] < arr[r]:
    largest = r
  if largest != i:
    arr[i], arr[largest] = arr[largest], arr[i]
    heapify(arr, n, largest)

def heap_sort(arr):
  n = len(arr)
  for i in range(n//2 - 1, -1, -1):
    heapify(arr, n, i)
  for i in range(n-1, 0, -1):
    arr[i], arr[0] = arr[0], arr[i]
    heapify(arr, i, 0)`,
      php: `function heapify(&$arr, $n, $i) {
  $largest = $i;
  $l = 2 * $i + 1;
  $r = 2 * $i + 2;
  if ($l < $n && $arr[$l] > $arr[$largest])
    $largest = $l;
  if ($r < $n && $arr[$r] > $arr[$largest])
    $largest = $r;
  if ($largest != $i) {
    $swap = $arr[$i];
    $arr[$i] = $arr[$largest];
    $arr[$largest] = $swap;
    heapify($arr, $n, $largest);
  }
}

function heapSort($arr) {
  $n = count($arr);
  for ($i = $n / 2 - 1; $i >= 0; $i--)
    heapify($arr, $n, $i);
  for ($i = $n - 1; $i > 0; $i--) {
    $temp = $arr[0];
    $arr[0] = $arr[$i];
    $arr[$i] = $temp;
    heapify($arr, $i, 0);
  }
  return $arr;
}`,
      javascript: `function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest])
    largest = l;
  if (r < n && arr[r] > arr[largest])
    largest = r;
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}`,
      csharp: `public void HeapSort(int[] arr) {
  int n = arr.Length;
  for (int i = n / 2 - 1; i >= 0; i--)
    Heapify(arr, n, i);
  for (int i = n - 1; i > 0; i--) {
    int temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    Heapify(arr, i, 0);
  }
}

private void Heapify(int[] arr, int n, int i) {
  int largest = i;
  int l = 2 * i + 1;
  int r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest])
    largest = l;
  if (r < n && arr[r] > arr[largest])
    largest = r;
  if (largest != i) {
    int swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    Heapify(arr, n, largest);
  }
}`
    }
  },
  {
    id: 'shell-sort',
    name: 'Shell Sort',
    description: 'An optimization of insertion sort that allows the exchange of items that are far apart.',
    complexity: 'Best: O(n log n), Average: O(n log² n), Worst: O(n²)',
    code: {
      java: `public void shellSort(int[] arr) {
  int n = arr.length;
  for (int gap = n/2; gap > 0; gap /= 2) {
    for (int i = gap; i < n; i++) {
      int temp = arr[i];
      int j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
}`,
      python: `def shell_sort(arr):
  n = len(arr)
  gap = n // 2
  while gap > 0:
    for i in range(gap, n):
      temp = arr[i]
      j = i
      while j >= gap and arr[j - gap] > temp:
        arr[j] = arr[j - gap]
        j -= gap
      arr[j] = temp
    gap //= 2`,
      php: `function shellSort($arr) {
  $n = count($arr);
  for ($gap = $n/2; $gap > 0; $gap /= 2) {
    for ($i = $gap; $i < $n; $i++) {
      $temp = $arr[$i];
      for ($j = $i; $j >= $gap && $arr[$j - $gap] > $temp; $j -= $gap)
        $arr[$j] = $arr[$j - $gap];
      $arr[$j] = $temp;
    }
  }
  return $arr;
}`,
      javascript: `function shellSort(arr) {
  const n = arr.length;
  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
}`,
      csharp: `public void ShellSort(int[] arr) {
  int n = arr.Length;
  for (int gap = n/2; gap > 0; gap /= 2) {
    for (int i = gap; i < n; i++) {
      int temp = arr[i];
      int j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
}`
    }
  },
  {
    id: 'counting-sort',
    name: 'Counting Sort',
    description: 'A sorting algorithm that works by counting the number of objects having distinct key values.',
    complexity: 'Best: O(n + k), Average: O(n + k), Worst: O(n + k)',
    code: {
      java: `public void countingSort(int[] arr) {
  int max = Arrays.stream(arr).max().getAsInt();
  int min = Arrays.stream(arr).min().getAsInt();
  int range = max - min + 1;
  int[] count = new int[range];
  int[] output = new int[arr.length];
  
  for (int i = 0; i < arr.length; i++)
    count[arr[i] - min]++;
  
  for (int i = 1; i < count.length; i++)
    count[i] += count[i - 1];
  
  for (int i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  
  System.arraycopy(output, 0, arr, 0, arr.length);
}`,
      python: `def counting_sort(arr):
  max_val = max(arr)
  min_val = min(arr)
  range_val = max_val - min_val + 1
  count = [0] * range_val
  output = [0] * len(arr)
  
  for i in range(len(arr)):
    count[arr[i] - min_val] += 1
    
  for i in range(1, len(count)):
    count[i] += count[i - 1]
    
  for i in range(len(arr) - 1, -1, -1):
    output[count[arr[i] - min_val] - 1] = arr[i]
    count[arr[i] - min_val] -= 1
    
  for i in range(len(arr)):
    arr[i] = output[i]`,
      php: `function countingSort($arr) {
  $max = max($arr);
  $min = min($arr);
  $range = $max - $min + 1;
  $count = array_fill(0, $range, 0);
  $output = array_fill(0, count($arr), 0);
  
  for ($i = 0; $i < count($arr); $i++)
    $count[$arr[$i] - $min]++;
    
  for ($i = 1; $i < count($count); $i++)
    $count[$i] += $count[$i - 1];
    
  for ($i = count($arr) - 1; $i >= 0; $i--) {
    $output[$count[$arr[$i] - $min] - 1] = $arr[$i];
    $count[$arr[$i] - $min]--;
  }
  
  for ($i = 0; $i < count($arr); $i++)
    $arr[$i] = $output[$i];
    
  return $arr;
}`,
      javascript: `function countingSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(arr.length).fill(0);
  
  for (let i = 0; i < arr.length; i++)
    count[arr[i] - min]++;
    
  for (let i = 1; i < count.length; i++)
    count[i] += count[i - 1];
    
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  
  for (let i = 0; i < arr.length; i++)
    arr[i] = output[i];
}`,
      csharp: `public void CountingSort(int[] arr) {
  int max = arr.Max();
  int min = arr.Min();
  int range = max - min + 1;
  int[] count = new int[range];
  int[] output = new int[arr.Length];
  
  for (int i = 0; i < arr.Length; i++)
    count[arr[i] - min]++;
    
  for (int i = 1; i < count.Length; i++)
    count[i] += count[i - 1];
    
  for (int i = arr.Length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  
  Array.Copy(output, arr, arr.Length);
}`
    }
  },
  {
    id: 'radix-sort',
    name: 'Radix Sort',
    description: 'A non-comparative sorting algorithm that sorts data with integer keys by grouping keys by the individual digits.',
    complexity: 'Best: O(nk), Average: O(nk), Worst: O(nk)',
    code: {
      java: `public void radixSort(int[] arr) {
  int max = Arrays.stream(arr).max().getAsInt();
  for (int exp = 1; max/exp > 0; exp *= 10)
    countSort(arr, exp);
}

private void countSort(int[] arr, int exp) {
  int[] output = new int[arr.length];
  int[] count = new int[10];
  
  for (int i = 0; i < arr.length; i++)
    count[(arr[i]/exp) % 10]++;
    
  for (int i = 1; i < 10; i++)
    count[i] += count[i - 1];
    
  for (int i = arr.length - 1; i >= 0; i--) {
    output[count[(arr[i]/exp) % 10] - 1] = arr[i];
    count[(arr[i]/exp) % 10]--;
  }
  
  System.arraycopy(output, 0, arr, 0, arr.length);
}`,
      python: `def counting_sort(arr, exp):
  n = len(arr)
  output = [0] * n
  count = [0] * 10
  
  for i in range(n):
    index = arr[i] // exp
    count[index % 10] += 1
    
  for i in range(1, 10):
    count[i] += count[i - 1]
    
  i = n - 1
  while i >= 0:
    index = arr[i] // exp
    output[count[index % 10] - 1] = arr[i]
    count[index % 10] -= 1
    i -= 1
    
  for i in range(n):
    arr[i] = output[i]

def radix_sort(arr):
  max_val = max(arr)
  exp = 1
  while max_val // exp > 0:
    counting_sort(arr, exp)
    exp *= 10`,
      php: `function countSort(&$arr, $exp) {
  $n = count($arr);
  $output = array_fill(0, $n, 0);
  $count = array_fill(0, 10, 0);
  
  for ($i = 0; $i < $n; $i++)
    $count[($arr[$i]/$exp) % 10]++;
    
  for ($i = 1; $i < 10; $i++)
    $count[$i] += $count[$i - 1];
    
  for ($i = $n - 1; $i >= 0; $i--) {
    $output[$count[($arr[$i]/$exp) % 10] - 1] = $arr[$i];
    $count[($arr[$i]/$exp) % 10]--;
  }
  
  for ($i = 0; $i < $n; $i++)
    $arr[$i] = $output[$i];
}

function radixSort($arr) {
  $max = max($arr);
  for ($exp = 1; $max/$exp > 0; $exp *= 10)
    countSort($arr, $exp);
  return $arr;
}`,
      javascript: `function countSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  
  for (let i = 0; i < n; i++)
    count[Math.floor(arr[i]/exp) % 10]++;
    
  for (let i = 1; i < 10; i++)
    count[i] += count[i - 1];
    
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i]/exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i]/exp) % 10]--;
  }
  
  for (let i = 0; i < n; i++)
    arr[i] = output[i];
}

function radixSort(arr) {
  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max/exp) > 0; exp *= 10)
    countSort(arr, exp);
}`,
      csharp: `private void CountSort(int[] arr, int exp) {
  int n = arr.Length;
  int[] output = new int[n];
  int[] count = new int[10];
  
  for (int i = 0; i < n; i++)
    count[(arr[i]/exp) % 10]++;
    
  for (int i = 1; i < 10; i++)
    count[i] += count[i - 1];
    
  for (int i = n - 1; i >= 0; i--) {
    output[count[(arr[i]/exp) % 10] - 1] = arr[i];
    count[(arr[i]/exp) % 10]--;
  }
  
  Array.Copy(output, arr, n);
}

public void RadixSort(int[] arr) {
  int max = arr.Max();
  for (int exp = 1; max/exp > 0; exp *= 10)
    CountSort(arr, exp);
}`
    }
  },
  {
    id: 'bucket-sort',
    name: 'Bucket Sort',
    description: 'A sorting algorithm that works by distributing the elements of an array into a number of buckets.',
    complexity: 'Best: O(n + k), Average: O(n + n²/k), Worst: O(n²)',
    code: {
      java: `public void bucketSort(float[] arr) {
  int n = arr.length;
  ArrayList<Float>[] buckets = new ArrayList[n];
  
  for (int i = 0; i < n; i++)
    buckets[i] = new ArrayList<>();
    
  for (int i = 0; i < n; i++) {
    int bucketIndex = (int) (n * arr[i]);
    buckets[bucketIndex].add(arr[i]);
  }
  
  for (int i = 0; i < n; i++)
    Collections.sort(buckets[i]);
    
  int index = 0;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < buckets[i].size(); j++)
      arr[index++] = buckets[i].get(j);
}`,
      python: `def bucket_sort(arr):
  n = len(arr)
  buckets = [[] for _ in range(n)]
  
  for num in arr:
    bucket_index = int(n * num)
    buckets[bucket_index].append(num)
    
  for bucket in buckets:
    bucket.sort()
    
  index = 0
  for bucket in buckets:
    for num in bucket:
      arr[index] = num
      index += 1`,
      php: `function bucketSort($arr) {
  $n = count($arr);
  $buckets = array_fill(0, $n, array());
  
  for ($i = 0; $i < $n; $i++) {
    $bucketIndex = (int)($n * $arr[$i]);
    $buckets[$bucketIndex][] = $arr[$i];
  }
  
  for ($i = 0; $i < $n; $i++)
    sort($buckets[$i]);
    
  $index = 0;
  for ($i = 0; $i < $n; $i++)
    for ($j = 0; $j < count($buckets[$i]); $j++)
      $arr[$index++] = $buckets[$i][$j];
      
  return $arr;
}`,
      javascript: `function bucketSort(arr) {
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);
  
  for (const num of arr) {
    const bucketIndex = Math.floor(n * num);
    buckets[bucketIndex].push(num);
  }
  
  for (const bucket of buckets)
    bucket.sort((a, b) => a - b);
    
  let index = 0;
  for (const bucket of buckets)
    for (const num of bucket)
      arr[index++] = num;
}`,
      csharp: `public void BucketSort(float[] arr) {
  int n = arr.Length;
  List<float>[] buckets = new List<float>[n];
  
  for (int i = 0; i < n; i++)
    buckets[i] = new List<float>();
    
  for (int i = 0; i < n; i++) {
    int bucketIndex = (int)(n * arr[i]);
    buckets[bucketIndex].Add(arr[i]);
  }
  
  for (int i = 0; i < n; i++)
    buckets[i].Sort();
    
  int index = 0;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < buckets[i].Count; j++)
      arr[index++] = buckets[i][j];
}`
    }
  },
  {
    id: 'cocktail-sort',
    name: 'Cocktail Sort',
    description: 'A variation of bubble sort that sorts in both directions alternatively.',
    complexity: 'Best: O(n), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void cocktailSort(int[] arr) {
  boolean swapped = true;
  int start = 0;
  int end = arr.length;
  
  while (swapped) {
    swapped = false;
    for (int i = start; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    
    if (!swapped) break;
    
    swapped = false;
    end--;
    
    for (int i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    start++;
  }
}`,
      python: `def cocktail_sort(arr):
  n = len(arr)
  swapped = True
  start = 0
  end = n - 1
  
  while swapped:
    swapped = False
    for i in range(start, end):
      if arr[i] > arr[i + 1]:
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        swapped = True
        
    if not swapped:
      break
      
    swapped = False
    end -= 1
    
    for i in range(end - 1, start - 1, -1):
      if arr[i] > arr[i + 1]:
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        swapped = True
        
    start += 1`,
      php: `function cocktailSort($arr) {
  $n = count($arr);
  $swapped = true;
  $start = 0;
  $end = $n - 1;
  
  while ($swapped) {
    $swapped = false;
    for ($i = $start; $i < $end; $i++) {
      if ($arr[$i] > $arr[$i + 1]) {
        $temp = $arr[$i];
        $arr[$i] = $arr[$i + 1];
        $arr[$i + 1] = $temp;
        $swapped = true;
      }
    }
    
    if (!$swapped) break;
    
    $swapped = false;
    $end--;
    
    for ($i = $end - 1; $i >= $start; $i--) {
      if ($arr[$i] > $arr[$i + 1]) {
        $temp = $arr[$i];
        $arr[$i] = $arr[$i + 1];
        $arr[$i + 1] = $temp;
        $swapped = true;
      }
    }
    $start++;
  }
  return $arr;
}`,
      javascript: `function cocktailSort(arr) {
  let swapped = true;
  let start = 0;
  let end = arr.length;
  
  while (swapped) {
    swapped = false;
    for (let i = start; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    
    if (!swapped) break;
    
    swapped = false;
    end--;
    
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    start++;
  }
}`,
      csharp: `public void CocktailSort(int[] arr) {
  bool swapped = true;
  int start = 0;
  int end = arr.Length;
  
  while (swapped) {
    swapped = false;
    for (int i = start; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    
    if (!swapped) break;
    
    swapped = false;
    end--;
    
    for (int i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    start++;
  }
}`
    }
  },
  {
    id: 'gnome-sort',
    name: 'Gnome Sort',
    description: 'A sorting algorithm similar to insertion sort, but moving elements to their proper place by a series of swaps.',
    complexity: 'Best: O(n), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void gnomeSort(int[] arr) {
  int index = 0;
  while (index < arr.length) {
    if (index == 0)
      index++;
    if (arr[index] >= arr[index - 1])
      index++;
    else {
      int temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }
}`,
      python: `def gnome_sort(arr):
  index = 0
  while index < len(arr):
    if index == 0:
      index += 1
    if arr[index] >= arr[index - 1]:
      index += 1
    else:
      arr[index], arr[index - 1] = arr[index - 1], arr[index]
      index -= 1`,
      php: `function gnomeSort($arr) {
  $index = 0;
  while ($index < count($arr)) {
    if ($index == 0)
      $index++;
    if ($arr[$index] >= $arr[$index - 1])
      $index++;
    else {
      $temp = $arr[$index];
      $arr[$index] = $arr[$index - 1];
      $arr[$index - 1] = $temp;
      $index--;
    }
  }
  return $arr;
}`,
      javascript: `function gnomeSort(arr) {
  let index = 0;
  while (index < arr.length) {
    if (index == 0)
      index++;
    if (arr[index] >= arr[index - 1])
      index++;
    else {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }
}`,
      csharp: `public void GnomeSort(int[] arr) {
  int index = 0;
  while (index < arr.Length) {
    if (index == 0)
      index++;
    if (arr[index] >= arr[index - 1])
      index++;
    else {
      int temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }
}`
    }
  },
  {
    id: 'comb-sort',
    name: 'Comb Sort',
    description: 'An improvement over bubble sort that uses a gap sequence to eliminate turtles.',
    complexity: 'Best: O(n log n), Average: O(n²/2^p), Worst: O(n²)',
    code: {
      java: `public void combSort(int[] arr) {
  int n = arr.length;
  int gap = n;
  boolean swapped = true;
  
  while (gap != 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;
    
    for (int i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        int temp = arr[i];
        arr[i] = arr[i + gap];
        arr[i + gap] = temp;
        swapped = true;
      }
    }
  }
}

private int getNextGap(int gap) {
  gap = (gap * 10) / 13;
  return Math.max(1, gap);
}`,
      python: `def get_next_gap(gap):
  gap = (gap * 10) // 13
  return max(1, gap)

def comb_sort(arr):
  n = len(arr)
  gap = n
  swapped = True
  
  while gap != 1 or swapped:
    gap = get_next_gap(gap)
    swapped = False
    
    for i in range(n - gap):
      if arr[i] > arr[i + gap]:
        arr[i], arr[i + gap] = arr[i + gap], arr[i]
        swapped = True`,
      php: `function getNextGap($gap) {
  $gap = ($gap * 10) / 13;
  return max(1, $gap);
}

function combSort($arr) {
  $n = count($arr);
  $gap = $n;
  $swapped = true;
  
  while ($gap != 1 || $swapped) {
    $gap = getNextGap($gap);
    $swapped = false;
    
    for ($i = 0; $i < $n - $gap; $i++) {
      if ($arr[$i] > $arr[$i + $gap]) {
        $temp = $arr[$i];
        $arr[$i] = $arr[$i + $gap];
        $arr[$i + $gap] = $temp;
        $swapped = true;
      }
    }
  }
  return $arr;
}`,
      javascript: `function getNextGap(gap) {
  gap = (gap * 10) / 13;
  return Math.max(1, Math.floor(gap));
}

function combSort(arr) {
  let n = arr.length;
  let gap = n;
  let swapped = true;
  
  while (gap != 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;
    
    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
    }
  }
}`,
      csharp: `private int GetNextGap(int gap) {
  gap = (gap * 10) / 13;
  return Math.Max(1, gap);
}

public void CombSort(int[] arr) {
  int n = arr.Length;
  int gap = n;
  bool swapped = true;
  
  while (gap != 1 || swapped) {
    gap = GetNextGap(gap);
    swapped = false;
    
    for (int i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        int temp = arr[i];
        arr[i] = arr[i + gap];
        arr[i + gap] = temp;
        swapped = true;
      }
    }
  }
}`
    }
  },
  {
    id: 'cycle-sort',
    name: 'Cycle Sort',
    description: 'An in-place sorting algorithm that minimizes the number of writes to memory.',
    complexity: 'Best: O(n²), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void cycleSort(int[] arr) {
  int n = arr.length;
  
  for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    int item = arr[cycleStart];
    int pos = cycleStart;
    
    for (int i = cycleStart + 1; i < n; i++)
      if (arr[i] < item)
        pos++;
        
    if (pos == cycleStart)
      continue;
      
    while (item == arr[pos])
      pos++;
      
    int temp = arr[pos];
    arr[pos] = item;
    item = temp;
    
    while (pos != cycleStart) {
      pos = cycleStart;
      for (int i = cycleStart + 1; i < n; i++)
        if (arr[i] < item)
          pos++;
          
      while (item == arr[pos])
        pos++;
        
      temp = arr[pos];
      arr[pos] = item;
      item = temp;
    }
  }
}`,
      python: `def cycle_sort(arr):
  n = len(arr)
  
  for cycle_start in range(n - 1):
    item = arr[cycle_start]
    pos = cycle_start
    
    for i in range(cycle_start + 1, n):
      if arr[i] < item:
        pos += 1
        
    if pos == cycle_start:
      continue
      
    while item == arr[pos]:
      pos += 1
      
    arr[pos], item = item, arr[pos]
    
    while pos != cycle_start:
      pos = cycle_start
      for i in range(cycle_start + 1, n):
        if arr[i] < item:
          pos += 1
          
      while item == arr[pos]:
        pos += 1
        
      arr[pos], item = item, arr[pos]`,
      php: `function cycleSort($arr) {
  $n = count($arr);
  
  for ($cycleStart = 0; $cycleStart < $n - 1; $cycleStart++) {
    $item = $arr[$cycleStart];
    $pos = $cycleStart;
    
    for ($i = $cycleStart + 1; $i < $n; $i++)
      if ($arr[$i] < $item)
        $pos++;
        
    if ($pos == $cycleStart)
      continue;
      
    while ($item == $arr[$pos])
      $pos++;
      
    $temp = $arr[$pos];
    $arr[$pos] = $item;
    $item = $temp;
    
    while ($pos != $cycleStart) {
      $pos = $cycleStart;
      for ($i = $cycleStart + 1; $i < $n; $i++)
        if ($arr[$i] < $item)
          $pos++;
          
      while ($item == $arr[$pos])
        $pos++;
        
      $temp = $arr[$pos];
      $arr[$pos] = $item;
      $item = $temp;
    }
  }
  return $arr;
}`,
      javascript: `function cycleSort(arr) {
  const n = arr.length;
  
  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;
    
    for (let i = cycleStart + 1; i < n; i++)
      if (arr[i] < item)
        pos++;
        
    if (pos == cycleStart)
      continue;
      
    while (item == arr[pos])
      pos++;
      
    [arr[pos], item] = [item, arr[pos]];
    
    while (pos != cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++)
        if (arr[i] < item)
          pos++;
          
      while (item == arr[pos])
        pos++;
        
      [arr[pos], item] = [item, arr[pos]];
    }
  }
}`,
      csharp: `public void CycleSort(int[] arr) {
  int n = arr.Length;
  
  for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    int item = arr[cycleStart];
    int pos = cycleStart;
    
    for (int i = cycleStart + 1; i < n; i++)
      if (arr[i] < item)
        pos++;
        
    if (pos == cycleStart)
      continue;
      
    while (item == arr[pos])
      pos++;
      
    int temp = arr[pos];
    arr[pos] = item;
    item = temp;
    
    while (pos != cycleStart) {
      pos = cycleStart;
      for (int i = cycleStart + 1; i < n; i++)
        if (arr[i] < item)
          pos++;
          
      while (item == arr[pos])
        pos++;
        
      temp = arr[pos];
      arr[pos] = item;
      item = temp;
    }
  }
}`
    }
  },
  {
    id: 'pancake-sort',
    name: 'Pancake Sort',
    description: 'A sorting algorithm that sorts an array by repeatedly flipping portions of the array.',
    complexity: 'Best: O(n), Average: O(n²), Worst: O(n²)',
    code: {
      java: `public void pancakeSort(int[] arr) {
  for (int currSize = arr.length; currSize > 1; currSize--) {
    int mi = findMax(arr, currSize);
    if (mi != currSize - 1) {
      flip(arr, mi);
      flip(arr, currSize - 1);
    }
  }
}

private int findMax(int[] arr, int n) {
  int mi = 0;
  for (int i = 0; i < n; i++)
    if (arr[i] > arr[mi])
      mi = i;
  return mi;
}

private void flip(int[] arr, int i) {
  int start = 0;
  while (start < i) {
    int temp = arr[start];
    arr[start] = arr[i];
    arr[i] = temp;
    start++;
    i--;
  }
}`,
      python: `def find_max(arr, n):
  mi = 0
  for i in range(n):
    if arr[i] > arr[mi]:
      mi = i
  return mi

def flip(arr, i):
  start = 0
  while start < i:
    arr[start], arr[i] = arr[i], arr[start]
    start += 1
    i -= 1

def pancake_sort(arr):
  curr_size = len(arr)
  while curr_size > 1:
    mi = find_max(arr, curr_size)
    if mi != curr_size - 1:
      flip(arr, mi)
      flip(arr, curr_size - 1)
    curr_size -= 1`,
      php: `function findMax($arr, $n) {
  $mi = 0;
  for ($i = 0; $i < $n; $i++)
    if ($arr[$i] > $arr[$mi])
      $mi = $i;
  return $mi;
}

function flip(&$arr, $i) {
  $start = 0;
  while ($start < $i) {
    $temp = $arr[$start];
    $arr[$start] = $arr[$i];
    $arr[$i] = $temp;
    $start++;
    $i--;
  }
}

function pancakeSort($arr) {
  $curr_size = count($arr);
  while ($curr_size > 1) {
    $mi = findMax($arr, $curr_size);
    if ($mi != $curr_size - 1) {
      flip($arr, $mi);
      flip($arr, $curr_size - 1);
    }
    $curr_size--;
  }
  return $arr;
}`,
      javascript: `function findMax(arr, n) {
  let mi = 0;
  for (let i = 0; i < n; i++)
    if (arr[i] > arr[mi])
      mi = i;
  return mi;
}

function flip(arr, i) {
  let start = 0;
  while (start < i) {
    [arr[start], arr[i]] = [arr[i], arr[start]];
    start++;
    i--;
  }
}

function pancakeSort(arr) {
  let currSize = arr.length;
  while (currSize > 1) {
    const mi = findMax(arr, currSize);
    if (mi != currSize - 1) {
      flip(arr, mi);
      flip(arr, currSize - 1);
    }
    currSize--;
  }
}`,
      csharp: `private int FindMax(int[] arr, int n) {
  int mi = 0;
  for (int i = 0; i < n; i++)
    if (arr[i] > arr[mi])
      mi = i;
  return mi;
}

private void Flip(int[] arr, int i) {
  int start = 0;
  while (start < i) {
    int temp = arr[start];
    arr[start] = arr[i];
    arr[i] = temp;
    start++;
    i--;
  }
}

public void PancakeSort(int[] arr) {
  int currSize = arr.Length;
  while (currSize > 1) {
    int mi = FindMax(arr, currSize);
    if (mi != currSize - 1) {
      Flip(arr, mi);
      Flip(arr, currSize - 1);
    }
    currSize--;
  }
}`
    }
  },
  {
    id: 'bogo-sort',
    name: 'Bogo Sort',
    description: 'A highly inefficient sorting algorithm that randomly shuffles the array until it is sorted. This algorithm is mainly used for educational purposes to demonstrate the worst-case scenario of sorting algorithms.',
    complexity: 'Best: O(1), Average: O(n * n!), Worst: O(∞)',
    code: {
      java: `public void bogoSort(int[] arr) {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
}

private boolean isSorted(int[] arr) {
  for (int i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

private void shuffle(int[] arr) {
  Random rand = new Random();
  for (int i = arr.length - 1; i > 0; i--) {
    int j = rand.nextInt(i + 1);
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}`,
      python: `def bogo_sort(arr):
  while not is_sorted(arr):
    shuffle(arr)

def is_sorted(arr):
  for i in range(len(arr) - 1):
    if arr[i] > arr[i + 1]:
      return False
  return True

def shuffle(arr):
  import random
  for i in range(len(arr) - 1, 0, -1):
    j = random.randint(0, i)
    arr[i], arr[j] = arr[j], arr[i]`,
      php: `function bogoSort(&$arr) {
  while (!isSorted($arr)) {
    shuffle($arr);
  }
}

function isSorted($arr) {
  for ($i = 0; $i < count($arr) - 1; $i++) {
    if ($arr[$i] > $arr[$i + 1]) return false;
  }
  return true;
}

function shuffle(&$arr) {
  for ($i = count($arr) - 1; $i > 0; $i--) {
    $j = rand(0, $i);
    $temp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $temp;
  }
}`,
      javascript: `function bogoSort(arr) {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}`,
      csharp: `public void BogoSort(int[] arr)
{
    while (!IsSorted(arr))
    {
        Shuffle(arr);
    }
}

private bool IsSorted(int[] arr)
{
    for (int i = 0; i < arr.Length - 1; i++)
    {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}

private void Shuffle(int[] arr)
{
    Random rand = new Random();
    for (int i = arr.Length - 1; i > 0; i--)
    {
        int j = rand.Next(i + 1);
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}`
    }
  }
]; 