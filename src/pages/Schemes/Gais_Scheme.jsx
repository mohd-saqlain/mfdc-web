import React, { useState, useTransition } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,
  Fade,
} from '@mui/material';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import PdfViewer from '../../components/pdfviewer';
import pdf1 from '../../assets/schemes/GAIS1.pdf';
import pdf2 from '../../assets/schemes/GAIS2.pdf';
import pdf3 from '../../assets/schemes/GAIS3.pdf';
import { useTranslation } from 'react-i18next';

const pdfData = [
  {
    label: 'gais_pmmsy',
    file: pdf1,
    headline: 'Comprehensive Guidelines for GIAS Scheme',
    description:
      'These guidelines outline the objectives, eligibility criteria, and application process for the Group Accident Insurance Scheme (GIAS), aimed at safeguarding the welfare of fisherfolk during their occupational activities.',
  },
  {
    label: 'gais_pmmsy1',
    file: pdf2,
    headline: 'GIAS Scheme Application Form',
    description:
      'This document contains the official application form for the GIAS scheme. Applicants are required to fill out all necessary personal, financial, and occupational details for successful enrollment.',
  },
  {
    label: 'Scheme Overview',
    file: pdf1,
    headline: 'Overview of the GIAS Scheme',
    description:
      'The GIAS scheme provides financial assistance to fisherfolk in the event of accidental disability or death. This overview summarizes the benefits, claim process, and key features of the scheme.',
  },
];

const Gais_Scheme = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ marginTop: '20px', padding: '10px' }}>

      <Box sx={{
        backgroundColor: '#e3e4e6',
        py: 1,
        px: 4,
        color: 'blue',
        textAlign: 'left'
      }}>
        <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'black' }}>

          <Link
            underline="hover"
            color='inherit'
            href="/"
            sx={{
              backgroundColor: 'skyblue',
              py: 1,
              px: 4,
              borderRadius: 1,
            }}

          >
            Home
          </Link>

          <Typography color='blue' >GAIS schemes</Typography>
        </Breadcrumbs>


      </Box>
      <Typography
        variant="h5"

        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          mb: 3,
          pt: 4
        }}
      >
        {t("gais_headline")}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 0,
        }}
      >
        {/* Tabs Panel */}
        <Box
          sx={{
            minWidth: isMobile ? '100%' : 420,
            p: 2,
            // borderRadius: 2,
            background: '#f9f9f9',
          }}
          elevation={3}
        >
          <Tabs
            orientation={isMobile ? 'vertical' : 'vertical'}
            variant="scrollable"
            value={selectedTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '.MuiTab-root': {
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
                textTransform: 'none',
                fontWeight: 500,
                mb: 1,
                px: 2,
                py: 1,
                transition: '0.3s ease',
                borderRadius: 1,
                color: '#fff',
                backgroundImage: 'linear-gradient(61deg,rgb(32, 192, 237),rgba(36, 107, 222, 0.89))',
              },
              '.Mui-selected': {
                backgroundImage: 'linear-gradient(61deg,rgb(58, 123, 214),rgb(57, 201, 241))',
                fontWeight: 'bold',
                boxShadow: 2,
                borderLeft: isMobile ? 'none' : `4px solid #ffffff`,
                color: '#fff',
              },
              '.MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {pdfData.map((pdf, index) => (
              <Tab key={index} label={t(pdf.label)} />
            ))}
          </Tabs>
        </Box>

        {/* PDF Viewer Panel */}
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            // borderRadius: 2,
            minHeight: '400px',
            backgroundColor: '#fff',
          }}
          elevation={3}
        >
          <Fade in timeout={500} key={selectedTab}>
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                {pdfData[selectedTab].headline}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  color: '#004d40',
                  background: '#e0f2f1',
                  p: 2,
                  borderLeft: '4px solid #00796b',
                  borderRadius: 1,
                }}
              >
                {pdfData[selectedTab].description}
              </Typography>

              <PdfViewer file={pdfData[selectedTab].file} />
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default Gais_Scheme;
