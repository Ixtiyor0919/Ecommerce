import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close"
import { Box, IconButton, Typography, Toolbar } from "@mui/material";
export const FilterWrapper = styled(Box)`
  gap: 10px;
  display: grid;
  padding: 20px;
`
export const FilterToolbar = styled(Toolbar)`
  padding: unset;
  height: unset;
`
export const TabsWrapper = styled(Box)`
  gap: 24px;
  display: grid;
`
export const FilterCloseBtn = styled(IconButton)`
  color: #a5a5a5;
`
export const FilterCloseIcon = styled(CloseIcon)`
  font-size: 2rem;
`
export const FilterBottom = styled(Box)`
  gap: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`
export const FilterTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #191919;
`

