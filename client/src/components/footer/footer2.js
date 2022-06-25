import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MUILink from '@mui/material/Link';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
//import { Link } from 'components/common';

const Footer = () => (
  <Box component="footer" style={{background:"linear-gradient(90deg, rgba(64, 209, 203, 0.8) 0%, rgba(51, 147, 221, 0.8) 50.83%, rgba(51, 107, 213, 0.8) 100%)"}}  color="black">
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            {/*<img src="/logo192.png" alt="logo" width="30" height="30" />*/}
            <Typography variant="caption" color="#777676">
              To inspire powerful conversations and collaborations among members
              worldwide so together we can change the world with creativity.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>

              <GitHub />

              <LinkedIn />


              <Email />

          </Stack>
        </Stack>
        <Stack
          direction={{ sm: 'row', xs: 'column-reverse' }}
          justifyContent="space-between"
          spacing={2}
          alignItems="center">
          <Stack direction="column" alignItems={{ xs: 'center', sm: 'start' }}>
            <Stack direction="row" spacing={2}>


                <Typography variant="body2">Community</Typography>

                <Typography variant="body2">Blog</Typography>

            </Stack>
            <Typography variant="caption" color="#777676">
              &copy; Copyright 2022 - DEVCERA
            </Typography>
          </Stack>
          <Stack direction="column">
            <Stack direction="row" spacing={2} justifyContent="end">

                <Typography variant="body2">Join DEVCERA</Typography>

                <Typography variant="body2">FAQs</Typography>

                <Typography variant="body2">Help Center</Typography>

                <Typography variant="body2">Parternships</Typography>

            </Stack>
            <Stack direction="row" spacing={2}>

                <MUILink variant="caption" color="#777676" component="p">
                  Contact Us
                </MUILink>

                <MUILink variant="caption" color="#777676" component="p">
                  Privacy Policy
                </MUILink>

                <MUILink variant="caption" color="#777676" component="p">
                  Terms of use
                </MUILink>


                <MUILink variant="caption" color="#777676" component="p">
                  Sitemap
                </MUILink>

            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;