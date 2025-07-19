import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import img1 from "../assets/activities/img1.jpg";
import img2 from "../assets/activities/img2.jpg";
import img3 from "../assets/activities/img3.jpg";
import img4 from "../assets/activities/img4.jpg";
import img5 from "../assets/activities/img5.jpg";
import img6 from "../assets/activities/img6.jpg";
import { useTranslation } from 'react-i18next';

const itemData = [
  { img: img1, title: 'Activities' },
  { img: img2, title: 'Activities' },
  { img: img3, title: 'Activities' },
  { img: img4, title: 'Activities' },
  { img: img5, title: 'Activities' },
  { img: img6, title: 'Activities' },
];

export default function Activities() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          mb: 4,
          fontSize: { xs: '1.4rem', sm: '1.8rem' },
        }}
      >
        {t("activities_heading")}
      </Typography>

      <ImageList
        gap={20}
        cols={getCols()}
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.3s ease',
              }}
            
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
