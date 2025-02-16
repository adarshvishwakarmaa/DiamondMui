import React from 'react'
import Layouts from '../Components/Layouts'
import { Box, Typography, Grid, LinearProgress } from '@mui/material'

const About = () => {
  const diamondStats = {
    cut: 90,        // Example percentage for cut quality
    color: 85,      // Example percentage for color quality
    clarity: 95,    // Example percentage for clarity quality
    carat: 80,      // Example percentage for carat weight
  }

  return (
    <Layouts>
      <Box sx={{
        my: 5,
        bgcolor:'lightblue',
        textAlign: 'center',
        p: 2,
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem',
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem",
          }
        }
      }}>
        <Typography variant='h4'>
          Discover Timeless Diamonds
        </Typography>
        <p>
          From the rich history behind each gem to the cutting-edge techniques we use to bring them to life, we ensure every diamond reflects the beauty and passion that defines us. Whether you're searching for the perfect engagement ring or a stunning addition to your collection, our diamonds are crafted to make every occasion unforgettable.
        </p>
        <br />
        <p>
          At My Shine Diamond, we source the world’s finest diamonds, handpicked for their clarity, cut, color, and carat weight. Each piece is meticulously crafted to perfection, ensuring that our customers receive only the best. With over decades of expertise, we have become a trusted name in the diamond industry.
        </p>

        {/* Diamond Stats Section */}
        <Box sx={{ mt: 6, textAlign: 'left' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', my: 2 }}>Diamond Quality Breakdown</Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {/* Cut Stat */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Cut</Typography>
              <LinearProgress variant="determinate" value={diamondStats.cut} sx={{ height: 8, borderRadius: 2 }} />
              <Typography variant="body2" sx={{ textAlign: 'center' }}>{diamondStats.cut}%</Typography>
            </Grid>

            {/* Color Stat */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Color</Typography>
              <LinearProgress variant="determinate" value={diamondStats.color} sx={{ height: 8, borderRadius: 2 }} />
              <Typography variant="body2" sx={{ textAlign: 'center' }}>{diamondStats.color}%</Typography>
            </Grid>

            {/* Clarity Stat */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Clarity</Typography>
              <LinearProgress variant="determinate" value={diamondStats.clarity} sx={{ height: 8, borderRadius: 2 }} />
              <Typography variant="body2" sx={{ textAlign: 'center' }}>{diamondStats.clarity}%</Typography>
            </Grid>

            {/* Carat Stat */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Carat</Typography>
              <LinearProgress variant="determinate" value={diamondStats.carat} sx={{ height: 8, borderRadius: 2 }} />
              <Typography variant="body2" sx={{ textAlign: 'center' }}>{diamondStats.carat}%</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layouts>
  )
}

export default About
