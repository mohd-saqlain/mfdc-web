import React from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { useTranslation } from 'react-i18next';

const scrollUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`;

const ScrollingBox = styled(Box)(({ theme }) => ({
  height: '200px',
  overflow: 'hidden',
  position: 'relative',
  background: '#f5f5f5',
  borderRadius: '8px',
}));

const ScrollingContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  animation: `${scrollUp} 25s linear infinite`,
}));

const LatestNews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const instructions = [
    t('instructions1'),

  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        flexWrap: 'nowrap',
        width: '100%',
        // maxWidth: '1200px',
        mx: 'auto',
        gap: 4,
        p: 2,
      }}
    >
      {/* Left Column */}
      <Box sx={{ flex: 1, backgroundColor: 'aliceblue', p: 2 }} >
        <Typography variant="h5" gutterBottom sx={{
          backgroundImage: 'linear-gradient(61deg, #00bcf2, #3c3e96)',
          color: 'white',
          p: 1,
          borderRadius: 1
        }}>

          {t('about_title')}
        </Typography>
        <Typography variant="body1">
          {t('about_description')}
        </Typography>
      </Box>

      {/* Right Column */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{
          backgroundImage: 'linear-gradient(61deg, #00bcf2, #3c3e96)',
          color: 'white',
          p: 1,
          borderRadius: 1
        }}>
          {t('instructions_title')}
        </Typography>
        <ScrollingBox>
          <ScrollingContent>
            {instructions.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ p: 1 }}>
                {index + 1}. {item}
              </Typography>
            ))}
          </ScrollingContent>
        </ScrollingBox>
      </Box>
    </Box>
  );
};

export default LatestNews;
