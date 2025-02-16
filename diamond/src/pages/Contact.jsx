
import React from "react";
import Layouts from "../Components/Layouts";
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layouts>
      {/* Apply gradient background to the entire contact page */}
      <Box
        sx={{
          minHeight: "100vh", 
          background: "linear-gradient(to right, #00aaff, #214467)", 
          display: "flex",
          flexDirection: "column", 
          justifyContent: "center", 
          padding: 3, 
          color: "white", 
        }}
      >
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2,color:'wheat' } }}>
          <Typography variant="h4">Get in Touch with Us</Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.6,
              color: "wheat", 
            }}
          >
            We value your inquiries and are here to assist with any questions you may have about our collection. Feel free to reach out through any of the contact methods below, and we’ll respond promptly.
          </Typography>
        </Box>

        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": { width: "300px" },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: "skyblue", color: "white" }} align="center">
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "skyblue", pt: 1 }} /> 8433547097
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                    adarshvishwakarma2004@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                    (Toll Free)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layouts>
  );
};

export default Contact;
