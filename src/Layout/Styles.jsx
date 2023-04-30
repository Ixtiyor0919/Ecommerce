import styled from "styled-components";
import { Toolbar, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const AppToolbar = styled(Toolbar)`
  padding: unset;
  z-index: 99;
  height: unset;
`
export const KeyboardFab = styled(Fab)`
  width: 50px;
  height: 50px;
  color: #5a5a5a;
  background-color: #ffffff;
  :hover {
    background-color: #A4A4A3;
    color: #F5F5F5;
  }
  :active {
    background-color: #A4A4A3;
    color: #ffffff;
  }
}}
`
export const KeyboardIcon = styled(KeyboardArrowUpIcon)`
  font-size: 1.8rem;
`