import { Box, Button, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import newArriwal from "../assets/Images/newArrival.jpeg";
import Cigar from "../assets/Images/Cigar.jpg";
import Spirits from "../assets/Images/spirits.jpeg";
import Wines from "../assets/Images/wine.jpeg";
import Soju from "../assets/Images/soju.jpeg";
import Sake from "../assets/Images/sakes.jpeg";
import Beers from "../assets/Images/beers.jpeg";
import RtdCider from "../assets/Images/rtd-cider.jpeg";
import Mixer from "../assets/Images/mixers.jpeg";
import CraftBeer from "../assets/Images/craft-beer.jpeg";
import Seltzer from "../assets/Images/Seltzer.jpg";
import Gifting from "../assets/Images/gifting.png";
import { ThemeContext } from "../ThemeContext";

const itemData = [
  {
    img: newArriwal,
    title: "NEW ARRIVAL",
  },
  {
    img: Cigar,
    title: "CIGAR & CIG.",
  },
  {
    img: Spirits,
    title: "SPIRITS",
  },
  {
    img: Wines,
    title: "WINES",
  },
  {
    img: Soju,
    title: "SOJU",
  },
  {
    img: Sake,
    title: "SAKE",
  },
  {
    img: Beers,
    title: "BEERS",
  },
  {
    img: RtdCider,
    title: "RTD & MEAD",
  },
  {
    img: Mixer,
    title: "MIXERS",
  },
  {
    img: CraftBeer,
    title: "MIXERS",
  },
  {
    img: Seltzer,
    title: "SELTZER",
  },
  {
    img: Gifting,
    title: "GIFTING",
  },
];

export default function Categories() {
  const theme = useContext(ThemeContext);

  return (
    <Box
      sx={{
        margin: { sm: "20px 40px", xs: "10px" },
      }}
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {itemData.map((item, index) => (
          <SwiperSlide key={item.img}>
            <ImageListItem
              key={item.img}
              sx={
                {
                  //   width: "300px",
                  //   height: "300px",
                  // borderRadius: "4px",
                }
              }
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                // src={item.img}
                alt={item.title}
                style={{
                  borderRadius: "12px",
                }}
              />
              <ImageListItemBar
                title={item.title}
                // subtitle={item.author}
                // actionIcon={
                //   <IconButton
                //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                //     aria-label={`info about ${item.title}`}
                //   >
                //     <InfoIcon />
                //   </IconButton>
                // }
                sx={{
                  // background: "rgb(42 0 37)",
                  backgroundColor: `${theme.backgroundColor}`,
                  borderRadius: "0px  0px 12px 12px",
                }}
              />
            </ImageListItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          sx={{
            backgroundColor: "inherit",
            color: `${theme.backgroundColor}`,
            "&:hover": {
              backgroundColor: "inherit",
              color: `${theme.backgroundColor}`,
            },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}
