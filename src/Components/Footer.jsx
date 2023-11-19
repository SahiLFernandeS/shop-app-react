import {
  CategoryRounded,
  FacebookRounded,
  SearchOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const CustomTypography = styled(Typography)({
  color: "#ae9479",
});

const LinkButton = styled(Button)({
  backgroundColor: "inherit",
  color: "#FFF",
});

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#311528",
          color: "#fff",
          height: "324px",
          display: { lg: "flex", xs: "none" },
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            width: "80%",
            //   display: "flex",
            //   alignItems: "center",
          }}
        >
          <Grid item xs={6} padding={"40px"}>
            <CustomTypography variant="h6" component="p">
              About Us
            </CustomTypography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: 200,
                padding: "6px 0",
              }}
            >
              Thousands of brands from across the globe with their unique
              experience and flavors, all under one name- Living Liquidz.
              Founded in the year 1970, we are now the leading and one of the
              foremost family-owned brands in the country that provides alcohol
              delivery.
            </Typography>
            <CustomTypography
              variant="h6"
              component="p"
              sx={{
                padding: "6px 0",
              }}
            >
              Follow us
            </CustomTypography>
            <IconButton
              sx={{
                color: "inherit",
                padding: 0,
                margin: "0px 12px 0px 0px",
              }}
            >
              <FacebookRounded
                sx={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </IconButton>

            <IconButton
              sx={{
                color: "inherit",
                padding: 0,
              }}
            >
              <InstagramIcon
                sx={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={3} padding={"40px"}>
            <CustomTypography variant="h6" component="p">
              Living Liquidz
            </CustomTypography>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              About Us
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Contact Us
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Bulk Order
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Store Locator
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Important Links
            </LinkButton>
          </Grid>
          <Grid item xs={3} padding={"40px"}>
            <CustomTypography variant="h6" component="p">
              Useful Links
            </CustomTypography>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Privacy Policy
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Disclamer
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Terms Of Use
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              Return Policy
            </LinkButton>
            <LinkButton
              sx={{
                display: "block",
                backgroundColor: "inherit",
                padding: "6px 0",
                minWidth: "max-content",
                color: "#FFF",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              }}
            >
              FAQs
            </LinkButton>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#311528",
          color: "#ae9479",
          height: "70px",
          display: { lg: "none", xs: "flex" },
          width: "100%",
          position: "fixed",
          bottom: "0px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                display: "block",
              }}
            >
              <HomeOutlinedIcon />
              <Typography variant="caption" component="p">
                HOME
              </Typography>
            </IconButton>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                display: "block",
              }}
            >
              <CategoryRounded />
              <Typography variant="caption" component="p">
                CATEGORIES
              </Typography>
            </IconButton>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                display: "block",
              }}
            >
              <SearchOutlined />
              <Typography variant="caption" component="p">
                SEARCH
              </Typography>
            </IconButton>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              sx={{
                color: "inherit",
                display: "block",
              }}
            >
              <AccountCircleOutlinedIcon />
              <Typography variant="caption" component="p">
                ORDERS
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
