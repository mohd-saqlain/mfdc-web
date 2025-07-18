import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import bgImage from '../../assets/back3.jpg';
import director1 from '../../assets/director1.jpg';
import director2 from '../../assets/director2.jpg';
import director3 from '../../assets/director3.jpg';

const DirectorsPage = () => {
  const { t } = useTranslation();

  const directors = [
    {
      name: 'person1Name1',
      designation: 'person1Designation1',
      image: director1,
    },
    {
      name: 'person2Name1',
      designation: 'person2Designation1',
      image: director2,
    },
    {
      name: 'person3Name1',
      designation: 'person3Designation1',
      image: director3,
    },
  ];

  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '80vh',
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          {/* {t('peopleData')} */}
        </Typography>
      </Box>

      {/* Director Cards */}
      <Grid container spacing={5} justifyContent="center">
        {directors.map((director, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0px 8px 24px rgba(0,0,0,0.15)',
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Avatar
                  src={director.image}
                  alt={t(director.name)}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '0px',
                    margin: '0 auto',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                    border: '4px solid #e0e0e0',
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#1a3f5c', mb: 1 }}
                >
                  {t(director.name)}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#666',
                    fontStyle: 'italic',
                  }}
                
                 dangerouslySetInnerHTML={{ __html: t(director.designation) }} />
                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DirectorsPage;
