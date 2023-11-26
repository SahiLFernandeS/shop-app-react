import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  List,
} from "@mui/material";
import {
  Badge,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const MenuButton = styled(Button)({
  backgroundColor: "inherit",
});

const CustomHeader = styled(Toolbar)({
  // backgroundColor: "#311528",
  // color: "#ae9479",
  flexDirection: "row",
  justifyContent: "space-between",
});

const CustomNotification = styled(Box)({
  // backgroundColor: "#ae9479",
  // color: "#311528",
  justifyContent: "center",
  alignItems: "center",
  height: "30px",
});

const HeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "50%",
  justifyContent: "space-around",
});

export default function ButtonAppBar() {
  const theme = useContext(ThemeContext);
  // console.log("theme------->", theme);
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"LIVINGLIQUIDZ"}>
          <Typography variant="h6" component="p" fontWeight={"800"}>
            LIVINGLIQUIDZ
          </Typography>
          {/* <ListItemButton>

            <ListItemText></ListItemText>
          </ListItemButton> */}
        </ListItem>
        <IconButton
          size="large"
          aria-label="location-button"
          aria-controls="location"
          aria-haspopup="true"
          // onClick={handleOpenNavMenu}
          color="inherit"
          sx={{
            "&:hover": {
              backgroundColor: "inherit",
            },
            "&:active": {
              backgroundColor: "inherit",
            },
            "&:focus": {
              backgroundColor: "inherit",
            },
            paddingTop: "0",
          }}
        >
          <LocationOnOutlinedIcon />
          <Typography
            variant="subtitle1"
            sx={{
              // color: "#ae9479",
              color: `${theme.color}`,
            }}
          >
            Mumbai & Pune
          </Typography>
        </IconButton>
      </List>

      <List>
        {[
          "Shop by Categories",
          "About Us",
          "Bulk Order",
          "Contact Us",
          "Sign In",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            // sx={{
            //   borderBottom: "1px solid grey",
            //   borderWidth: "80%",
            // }}
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  // color: "#ae9479",
                  color: `${theme.color}`,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={
        {
          // width: "100%",
          // position: "fixed",
          // top: "0px",
        }
      }
    >
      <CustomNotification
        sx={{
          display: { lg: "flex", xs: "none" },
          backgroundColor: `${theme.color}`,
          color: `${theme.backgroundColor}`,
        }}
      >
        <Typography variant="caption" component="p">
          WE NEVER ASK FOR ADVANCE PAYMENT. MAKE PAYMENT ONLY AFTER DELIVERY VIA
          CASH/CARD. FOR QUERY CALL @ <a href="tel:+917507857779">7507857779</a>
        </Typography>
      </CustomNotification>
      <CustomHeader
        disableGutters
        sx={{
          display: { lg: "flex", xs: "none" },
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
      >
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <HeaderBox sx={{}}>
          <Typography variant="h6" component="span" sx={{}}>
            LIVING LIQUIDZ
          </Typography>
          <MenuButton color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            SPIRITS
          </MenuButton>
          <MenuButton color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            WINES
          </MenuButton>
          <MenuButton color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            BEERS
          </MenuButton>
          <MenuButton color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            MORE
          </MenuButton>
        </HeaderBox>
        {/* <InputBase
            sx={{ backgroundColor: "#fff" }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          /> */}
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FormControl>
            <TextField
              variant="outlined"
              placeholder="Search"
              InputProps={{
                style: {
                  backgroundColor: "white", // Set background color
                  borderRadius: "4px", // Set border radius
                  height: "40px",
                  width: "30vw",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <SearchIcon /> */}
          </FormControl>
          <MenuButton color="inherit">Sign In</MenuButton>
          <IconButton
            size="large"
            aria-label="cart-icon-button"
            aria-controls="cart-icon"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartRoundedIcon color="inherit" />
            </Badge>
          </IconButton>
        </Box>
      </CustomHeader>
      <CustomHeader
        disableGutters
        sx={{
          display: { xs: "flex", lg: "none" },
          position: "sticky",
          top: "0px",
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
      >
        <Box>
          <IconButton
            size="large"
            aria-label="menu-button"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer("left", true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="whatsapp-button"
            aria-controls="whatsapp"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <WhatsApp />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h6" component="span" sx={{}}>
            LIVING LIQUIDZ
          </Typography>
        </Box>
        <Box>
          <IconButton
            size="large"
            aria-label="search-button"
            aria-controls="search"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="cart-button"
            aria-controls="cart"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartRoundedIcon color="inherit" />
            </Badge>
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </Box>
      </CustomHeader>
      <CustomNotification
        sx={{
          display: { lg: "none", xs: "flex" },
          backgroundColor: `${theme.color}`,
          color: `${theme.backgroundColor}`,
        }}
      >
        <Typography
          variant="caption"
          component="p"
          sx={{
            fontSize: "0.6em",
            textAlign: "center",
          }}
        >
          WE NEVER ASK FOR ADVANCE PAYMENT. MAKE PAYMENT ONLY AFTER DELIVERY VIA
          CASH/CARD. FOR QUERY CALL @ <a href="tel:+917507857779">7507857779</a>
        </Typography>
      </CustomNotification>
    </AppBar>
  );
}
