import { Button } from "@mui/material";
import styled from "styled-components";

export const BtnOutlined = styled(Button)`
    width: ${(props) => props.width};
    padding: 13px 40px;
    font-family: 'SF Pro Text';
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FF7010;
    border: 1px solid #FF7010;
    border-radius: 6px;
    text-transform: capitalize;
`