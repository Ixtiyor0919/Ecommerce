import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TotalWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TotalIner = styled(Box)`
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #A5A5A5;
`
export const TotalText = styled(Typography)`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #FF7010;
`