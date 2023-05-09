import styled from "styled-components";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, IconButton, Tab, Tabs, List, ListItem, Typography } from "@mui/material";

export const STabLIst= styled(List)`
    display: flex;
    gap: 20px;
`
export const STabListItem = styled(ListItem)`
    padding: unset;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #191919;
    display: block;
    text-align: center;
    &.Mui-disabled {
        opacity: 0.5;
    }
`
export const SquareItem = styled(Button)`
    padding: 25px;
    background: #FFFFFF;
    border-radius: 12px;
    color: #FF7010;
    border: 1px solid ${props => props.active ? "#FF7010" : "#F0F0F0"};
    position: relative;
    &.css-1b2abom-MuiButtonBase-root-MuiButton-root.Mui-disabled {
        pointer-events: visible;
    }
`
export const SquareItemIcon = styled(TaskAltIcon)`
    width: 16px;
    height: 16px;
    color: #FF7010;
    position: absolute;
    top: 10px;
    right: 10px;
    display: ${props => props.active ? "block" : "none"};
`
export const SquareCancelIcon = styled(HighlightOffIcon)`
    width: 16px;
    height: 16px;
    color: #A5A5A5;
`
export const SquareTaskIcon = styled(TaskAltIcon)`
    width: 16px;
    height: 16px;
    color: #FF7010;
`
export const IconBtn = styled(IconButton)`
    width: 16px;
    height: 16px;
    color: #A5A5A5;
    position: absolute;
    top: 10px;
    right: 10px;
    display: ${props => props.active ? "flex" : "none"};
`
export const TabWrapper = styled(Tabs)`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 6px;
    .css-10i97vx-MuiTabs-indicator {
        display: none;
    }
`
export const TabItem = styled(Tab)`
    width: ${props => props.second ? "50%" : "33.3333333333%"};
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border-radius: 6px;
    text-transform: ${props => props.second ? "capitalize" : "inherit"};
    background: ${props => props.active ? "#FF7010" : "inherit"};
    color: ${props => props.active ? "#FFFFFF" : "#191919"};
    &.Mui-selected {
        color: #ffffff;
    }
`
export const AddBox = styled.div``
export const AddTitle = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #191919;
`
