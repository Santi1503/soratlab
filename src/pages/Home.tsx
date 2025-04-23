import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, Container, Box, useTheme, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { algorithms } from '../data/algorithms';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Sorting Algorithms
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto',
              mb: 4
            }}
          >
            Visualize and understand different sorting algorithms through interactive animations and code examples.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={3}>
        {algorithms.map((algorithm, index) => (
          <Grid item xs={12} sm={6} md={4} key={algorithm.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardActionArea 
                  component={Link} 
                  to={`/algorithm/${algorithm.id}`}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      {algorithm.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      paragraph
                      sx={{ mb: 2 }}
                    >
                      {algorithm.description}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      display="block" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontWeight: 500
                      }}
                    >
                      Complexity: {algorithm.complexity}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 