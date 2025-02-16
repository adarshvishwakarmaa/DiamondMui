
import React from 'react'
import Layouts from '../Components/Layouts'
import Bg from '../images/bg3.jpg'
import {MenuList} from '../datas/Data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layouts>
      
      <Box  sx={{ 
          display: 'flex', 
          flexWrap: "wrap", 
          justifyContent: 'center', 
          backgroundImage: `url(${Bg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '100vh', 
        }}>
        {
          MenuList.map(menu =>(
            <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
              <CardActionArea>
                <CardMedia
              
                  sx={{  height: 250,
                    objectFit: 'cover', 
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,}}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />

                <CardContent sx={{display: 'flex',
                  flexDirection: 'column',
                  padding: 2,
                  bgcolor: '#cfe2ff',
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  height: '100%',
                  boxSizing: 'border-box',}}>
                  <Typography variant='h5' gutterBottom component={"div"} sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#003366', 
                    mb: 1}}>
                    {menu.name}
                  </Typography>

                  <Typography variant='body2' >
                    {menu.description}
                  </Typography>

                  <Typography variant='h6' sx={{
                    fontWeight: 'bold',
                    color: '#0066cc', 
                    textAlign: 'center',
                    mt: 2,
                    fontSize: '1.2rem', 
                    letterSpacing: 1,
                    paddingTop: 1,
                  }}>
                    {menu.price}
                  </Typography>
                </CardContent>
               
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layouts>
  )
}

export default Menu

