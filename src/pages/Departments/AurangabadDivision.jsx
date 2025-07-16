import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs, Link, } from '@mui/material';

function createData(no, name, designation) {
  return { no, name, designation };
}

const rows = [
  createData(1, "officer11", "designation11"),
  createData(2, "officer21", "designation21"),
  
];

export default function AurangabadDivision() {
  const {t} =useTranslation();
  return (
    <Box sx={{ marginTop: 6, px: 2 }}>

      {/* Header with Breadcrumb  */}
            <Box
              sx={{
                backgroundColor: "#e3e4e6",
                backgroundPosition: 'center',
                color: 'blue',
                py: 1,
                px: 4,
                mb:1,
                textAlign: 'left',
                position: 'relative',
      
              }}
            >
              <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'black' }}>
                <Link underline="hover" color="inherit" href="/"
                  sx={{
                    backgroundColor: 'skyblue',
                    py: 1,
                    px: 4,
                  }}>
                  {t("home")}
                </Link>
                <Typography color="blue" sx={{
      
                }}>{t("department3")}</Typography>
              </Breadcrumbs>
      
            </Box>
      <Typography variant="h4" align="center" gutterBottom>
       {t("department3")}
      </Typography>

      <TableContainer component={Paper} sx={{p:6,boxShadow:3,borderRadius:2 }}>
        <Table sx={{ minWidth: 450 }} aria-label="division table">
          <TableHead>
            <TableRow sx={{backgroundColor:'#76a6f5'}}>
              <TableCell align="center"><strong>{t("srno")}</strong></TableCell>
              <TableCell align="center"><strong>{t("name")}</strong></TableCell>
              <TableCell align="center"><strong>{t("designation")}</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">{row.no}</TableCell>
                <TableCell align="center">{t(row.name)}</TableCell>
                <TableCell align="center">{t(row.designation)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Contact Information Section */}
      <Box
      sx={{
        marginTop: 6,
        p: 6,
        backgroundColor: '#f1f5f9',
        borderRadius: 2,
        alignItems: 'center',
        textAlign: 'center',
        
      }}
    >
      <Typography variant="h5" gutterBottom>
        {t("contactinfo1")}
      </Typography>
      <Typography variant="body2">
        <strong>{t("corpName1")}</strong>
      </Typography>
      <Typography variant="body2">
        {t("address1")}
      </Typography>
      {/* <Typography variant="body2">
        <strong>{t("email1")}</strong>
      </Typography>
      <Typography variant="body2">
        <strong>{t("phone1")}</strong>
      </Typography> */}
    </Box>
    </Box>
  );
}
