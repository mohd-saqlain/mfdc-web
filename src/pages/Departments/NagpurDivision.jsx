import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Breadcrumbs, Link, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function createData(no, name, designation) {
  return { no, name, designation };
}

const rows = [
  createData(1, "officer22", "designation22"),
  createData(2, "officer23", "designation23"),
  createData(3, "officer24", "designation24"),
  createData(4, "officer25", "designation25"),
    createData(5, "officer26", "designation26"),
  createData(6, "officer27", "designation27"),

 

];

export default function MainDivision() {
  const { t } = useTranslation();

  return (
    <Box sx={{ marginTop: 4, px: { xs: 2, md: 4 }, fontFamily: 'Roboto, sans-serif' }}>

      {/* Header with Breadcrumb */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
          color: 'white',
          py: 2,
          px: 4,
          mb: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ fontWeight: 500, fontSize: '1rem' }}
          >
            {t("home")}
          </Link>
          <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
            {t("department2")}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Page Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          color: '#1e3a8a',
          mb: 3,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {t("department2")}
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ p: 2, boxShadow: 4, borderRadius: 3 }}>
        <Table sx={{ minWidth: 450 }} aria-label="division table">
          <TableHead>
            <TableRow sx={{  backgroundImage: 'linear-gradient(61deg, #00bcf2, #3c3e96)', }}>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                {t("srno")}
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                {t("name")}
              </TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                {t("designation")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.no}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                  '&:hover': {
                    backgroundColor: '#e0f2fe',
                    transition: 'background-color 0.3s ease',
                  },
                }}
              >
                <TableCell align="center" sx={{ fontWeight: 500 }}>{row.no}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 500 }}>{t(row.name)}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 500 }}>{t(row.designation)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Contact Info */}
      <Box
        sx={{
          marginTop: 6,
          marginBottom: 2,
          p: 4,
          backgroundColor: '#f1f5f9',
          borderRadius: 3,
          textAlign: 'center',
          boxShadow: 2,
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 700, color: '#1e40af', mb: 2 }}
        >
          {t("contactinfo")}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {t("corpName2")}
        </Typography>
        <Typography variant="body2" sx={{ color: '#475569', mt: 1 }}>
          {t("address2")}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <MailOutlineIcon/> <strong>{t("email2")}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <PhoneInTalkIcon/> <strong>{t("phone2")}</strong>
        </Typography>
      </Box>
    </Box>
  );
}

