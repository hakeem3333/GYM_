import React from 'react';
import { Box, Stack, Typography, Grid,Card, CardActionArea, CardMedia, CardContent} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import OpeningHoursImage from '../assets/images/jam1.jpg';
import MembersImage from '../assets/images/members-image.jpg';
import Diet from '../assets/images/diet-1.jpg';
import Testimonial from '../assets/images/testimonial.jpeg';

const Footer = () => (

 <Box mb="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Hakeem </Typography>

    <Grid container spacing={3} >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="140"
              image={OpeningHoursImage} alt = "opening-hours"
              className="text-me"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Opening Hours
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Alegreya" fontSize={20}>
                The gym is opened 24/7 everyday from monday to saturday. Members meeting on Sunday
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={MembersImage}
              alt="members-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Members
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Alegreya" fontSize={20}>
               Members include people from diverse area and settlement. We are welcome to all
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Testimonial}
              alt="testimonials-gym"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Testimonials
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Alegreya" fontSize={20}>
                We push members to acheive their desired result to reach maximum fitness levels
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Diet}
              alt="diet-gym"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Diet
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily="Alegreya" fontSize={20}>
              Personalised gym diet are available, members would be guided by the instructor. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
      </Box>
  );

export default Footer;