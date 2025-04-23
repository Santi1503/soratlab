import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
  Grid,
  Button,
  Slider,
  Snackbar,
  Alert,
  Container,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import { algorithms } from '../data/algorithms';
import { bubbleSort, quickSort, mergeSort, insertionSort, selectionSort, heapSort, shellSort, countingSort, radixSort, bucketSort, cocktailSort, gnomeSort, combSort, cycleSort, pancakeSort, bogoSort } from '../utils/sorting';
import { SortingState } from '../types';

const AlgorithmDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tabValue, setTabValue] = useState(0);
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [arraySize, setArraySize] = useState(20);
  const [sortingState, setSortingState] = useState<SortingState | null>(null);
  const [sortingInterval, setSortingInterval] = useState<NodeJS.Timeout | null>(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const algorithm = algorithms.find((alg) => alg.id === id);

  const generateNewArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSortingState(null);
  }, [arraySize]);

  useEffect(() => {
    generateNewArray();
  }, [generateNewArray]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSpeedChange = (event: Event, newValue: number | number[]) => {
    setSpeed(newValue as number);
  };

  const handleArraySizeChange = (event: Event, newValue: number | number[]) => {
    setArraySize(newValue as number);
  };

  const startSorting = () => {
    if (!algorithm) return;
    
    setIsSorting(true);
    const result = (() => {
      switch (algorithm.id) {
        case 'bubble-sort':
          return bubbleSort(array);
        case 'quick-sort':
          return quickSort(array);
        case 'merge-sort':
          return mergeSort(array);
        case 'insertion-sort':
          return insertionSort(array);
        case 'selection-sort':
          return selectionSort(array);
        case 'heap-sort':
          return heapSort(array);
        case 'shell-sort':
          return shellSort(array);
        case 'counting-sort':
          return countingSort(array);
        case 'radix-sort':
          return radixSort(array);
        case 'bucket-sort':
          return bucketSort(array);
        case 'cocktail-sort':
          return cocktailSort(array);
        case 'gnome-sort':
          return gnomeSort(array);
        case 'comb-sort':
          return combSort(array);
        case 'cycle-sort':
          return cycleSort(array);
        case 'pancake-sort':
          return pancakeSort(array);
        case 'bogo-sort':
          return bogoSort(array);
        default:
          return bubbleSort(array);
      }
    })();

    setArray(result.steps[0].array);
    setSortingState(result);
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < result.steps.length) {
        setArray(result.steps[currentStep].array);
        setSortingState(prev => ({
          ...result,
          currentStep: currentStep
        }));
        currentStep++;
      } else {
        clearInterval(interval);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setIsSorting(false);
      }
    }, 1000 - speed * 10);

    setSortingInterval(interval);
  };

  const stopSorting = () => {
    if (sortingInterval) {
      clearInterval(sortingInterval);
      setSortingInterval(null);
    }
    setIsSorting(false);
  };

  if (!algorithm) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">Algorithm not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              px: 3,
              py: 1
            }}
          >
            Back to Algorithms
          </Button>
          <Typography variant="h4" component="h1" sx={{ 
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {algorithm.name}
          </Typography>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: 2,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)'
          }}
        >
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            {algorithm.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
              Complexity
            </Typography>
            <Typography variant="body1" paragraph>
              {algorithm.complexity}
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 2, 
                height: '400px', 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'center',
                borderRadius: 2,
                background: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(10px)'
              }}
            >
              {array.map((value, index) => (
                <motion.div
                  key={index}
                  style={{
                    width: `${100 / array.length}%`,
                    height: `${value}%`,
                    backgroundColor: sortingState?.steps[sortingState.currentStep]?.activeIndices?.includes(index)
                      ? theme.palette.error.main
                      : sortingState?.steps[sortingState.currentStep]?.sortedIndices?.includes(index)
                      ? theme.palette.success.main
                      : theme.palette.primary.main,
                    margin: '0 1px',
                    borderRadius: '4px 4px 0 0',
                    transition: 'all 0.1s ease'
                  }}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1 }}
                />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3, 
                borderRadius: 2,
                background: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(10px)'
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography gutterBottom sx={{ mb: 1 }}>Speed</Typography>
                  <Slider
                    value={speed}
                    onChange={handleSpeedChange}
                    min={0}
                    max={100}
                    disabled={isSorting}
                    sx={{
                      color: theme.palette.primary.main,
                      '& .MuiSlider-thumb': {
                        width: 16,
                        height: 16,
                      }
                    }}
                  />
                </Box>
                <Box>
                  <Typography gutterBottom sx={{ mb: 1 }}>Array Size</Typography>
                  <Slider
                    value={arraySize}
                    onChange={handleArraySizeChange}
                    min={5}
                    max={50}
                    disabled={isSorting}
                    sx={{
                      color: theme.palette.primary.main,
                      '& .MuiSlider-thumb': {
                        width: 16,
                        height: 16,
                      }
                    }}
                  />
                </Box>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={generateNewArray}
                    disabled={isSorting}
                    sx={{ 
                      flex: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      py: 1
                    }}
                  >
                    New Array
                  </Button>
                  {!isSorting ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={startSorting}
                      sx={{ 
                        flex: 1,
                        borderRadius: 2,
                        textTransform: 'none',
                        py: 1
                      }}
                    >
                      Sort
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={stopSorting}
                      sx={{ 
                        flex: 1,
                        borderRadius: 2,
                        textTransform: 'none',
                        py: 1
                      }}
                    >
                      Stop
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Paper 
          elevation={3}
          sx={{ 
            borderRadius: 2,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)'
          }}
        >
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500
              }
            }}
          >
            <Tab label="Java" />
            <Tab label="Python" />
            <Tab label="PHP" />
            <Tab label="JavaScript" />
            <Tab label="C#" />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {tabValue === 0 && (
              <pre style={{ margin: 0 }}>{algorithm.code.java}</pre>
            )}
            {tabValue === 1 && (
              <pre style={{ margin: 0 }}>{algorithm.code.python}</pre>
            )}
            {tabValue === 2 && (
              <pre style={{ margin: 0 }}>{algorithm.code.php}</pre>
            )}
            {tabValue === 3 && (
              <pre style={{ margin: 0 }}>{algorithm.code.javascript}</pre>
            )}
            {tabValue === 4 && (
              <pre style={{ margin: 0 }}>{algorithm.code.csharp}</pre>
            )}
          </Box>
        </Paper>
      </Stack>

      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowToast(false)} 
          severity="success" 
          sx={{ 
            width: '100%',
            borderRadius: 2,
            boxShadow: theme.shadows[4]
          }}
        >
          Sorting completed!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AlgorithmDetail; 