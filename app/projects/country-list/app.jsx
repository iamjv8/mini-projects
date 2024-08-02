"use client";
import React, { useEffect, useState } from "react";
import { Box, TextField, List, ListItem } from "@mui/material";
import axios from "axios";

const API_URL = "https://api.first.org/data/v1/countries?pretty=true";
const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const getCountries = debounce(async (query = "") => {
    const response = await axios.get(`${API_URL}&q=${query}`);
    let data = [];
    Object.keys(response.data.data).map((item) => {
      return data.push(response.data.data[item]);
    });
    setCountries(data);
  }, 500);

  useEffect(() => {
    getCountries("");
  }, []);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Type Country Name"
          variant="outlined"
          onInput={(event) => getCountries(event.target.value)}
        />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            height: "500px",
            overflow: "scroll",
          }}
        >
          {countries.map((item) => (
            <ListItem
              key={item.country}
              onClick={() => alert(`You clicked on "${item.country}"`)}
            >
              {item.country}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default CountryList;
