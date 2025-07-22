import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Breadcrumbs,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import PdfViewer from '../../components/pdfviewer';
import pdf1 from '../../assets/guidlines/general01.pdf';
import pdf2 from '../../assets/guidlines/general02.pdf';
import { useTranslation } from 'react-i18next';

const pdfs = [pdf1, pdf2];

const labels = [
  'pmmsy_scheme1',
  'pmmsy_scheme2'
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Pmmsy_scheme() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '20px', padding: '10px' }}>
      {/* Breadcrumbs */}
      <Box
        sx={{
          backgroundColor: '#e3e4e6',
          py: 1,
          px: 4,
          color: 'blue',
          textAlign: 'left'
        }}
      >
        <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'black' }}>
          <Link
            underline="hover"
            color='inherit'
            href="/"
            style={{
              backgroundColor: 'skyblue',
              padding: '6px 16px',
              borderRadius: 4,
              textDecoration: 'none'
            }}
          >
            Home
          </Link>
          <Typography color='blue'>PMMSY Schemes</Typography>
        </Breadcrumbs>
      </Box>

      {/* Page Heading */}
      <Typography variant='h5' sx={{ textAlign: 'center', py: 5 }}>
        {t("pmmsy_heading")}
      </Typography>

      {/* Main Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
      
        }}
      >
        {/* Left Tabs Panel */}
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
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="PMMSY Tabs"
            sx={{
              '.MuiTab-root': {
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 500,
                mb: 1,
                px: 2,
                py: 1,
                transition: '0.3s ease',
                color: '#fff',
               backgroundImage: 'linear-gradient(61deg,rgb(32, 192, 237),rgba(36, 107, 222, 0.89))',
              },
              '.Mui-selected': {
                backgroundImage: 'linear-gradient(61deg,rgb(58, 123, 214),rgb(57, 201, 241))',
                fontWeight: 'bold',
                boxShadow: 2,
                color: '#fff',
                borderLeft: isMobile ? 'none' : `4px solid #ffffff`,
              },
              '.MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {labels.map((label, index) => (
              <Tab key={index} label={t(label)} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {/* Right PDF Viewer Panel */}
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
          {pdfs.map((pdf, index) => (
            <TabPanel key={index} value={value} index={index}>
              <PdfViewer file={pdf} />
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
