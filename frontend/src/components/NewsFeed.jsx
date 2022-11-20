import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://live-fitness-and-health-news.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Key": "723117c92bmshc5ef97fb6f4a73fp179118jsn4c5eaf71c90d",
        "X-RapidAPI-Host": "live-fitness-and-health-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewsList(response.data.slice(0, 20));
      })
      .catch();
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{ mx: "auto", overflow: "hidden", height: "30rem", mt: 3, mb: 5 }}
    >
      <Box
        sx={{
          overflowY: "auto",
          border: 2,
          height: "30rem",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            bgcolor: "primary.dark",
            fontWeight: 500,
            py: 1,
            px: 2,
            color: "primary.contrastText",
            width: "100%",
          }}
        >
          Latest Health & Fitness News Feed
        </Typography>
        <Box
          sx={{
            overflowY: "auto",
            height: "30rem",
    
            position: "relative",
          }}
        >
          {newsList.length > 0 &&
            newsList.map((news) => {
              return (
                <>
                  <Box sx={{ width: "100%", my: 1, px: 2 }}>
                    <Typography variant="h6">{news.title}</Typography>
                    <Typography variant="body2">
                      source: {news.source}
                    </Typography>
                  </Box>
                  <Divider />
                </>
              );
            })}
        </Box>
      </Box>
    </Container>
  );
};

export default NewsFeed;
