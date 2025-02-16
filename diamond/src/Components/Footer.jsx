import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#1a1a19c8',color:'lightblue',p:3}} >

      <Box sx={{my:3,"& svg":{fontSize:"60px",cursor:"pointer",mr:2,},"&     svg:hover":{color:'goldenrod', transform:'translateX(5px)',transition:'all 400ms',}}} >
          <a href="https://www.instagram.com/adarshvishwakarma923" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: "#E4405F", fontSize: 30, marginRight: 1 }} />
          </a>
          <a href="https://www.linkedin.com/in/adarsh-vishwakarma-a055a1317/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: "#0A66C2", fontSize: 30, marginRight: 1 }} />
          </a>
          <a href="https://github.com/adarshvishwakarmaa" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: "white", fontSize: 30, marginRight: 1 }} />
          </a>
          <a href="https://www.facebook.com/share/1FhhRRqo1k/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon sx={{ color: "#1877F2", fontSize: 30 }} />
          </a>
        </Box>
        
        <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:"1rem"},}} >All Rights Reserved &copy; Diamond</Typography>
      </Box>
    </>
  )
}

export default Footer
