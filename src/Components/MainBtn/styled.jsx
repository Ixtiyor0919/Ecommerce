import { Button } from "@mui/material";
import styled from "styled-components";

export const MainBtnStyled = styled(Button)`
    width: ${(props) => props.width};
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 13px 40px;
    gap: 10px;
    background: #FF7010;
    border-radius: 6px;
    text-transform: capitalize;
`