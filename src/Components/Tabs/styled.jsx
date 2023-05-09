import {
  Button,
  IconButton,
  Tab,
  Tabs,
  List,
  ListItem,
  Typography,
  Box,
} from "@mui/material"
import styled from "styled-components"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

export const STabLIst = styled(List)`
  display: flex;
  gap: 20px;
`
export const STabListItem = styled(ListItem)`
  padding: unset;
  font-family: "Inter";
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
  background: #ffffff;
  border-radius: 12px;
  color: #ff7010;
  border: 1px solid ${(props) => (props.active ? "#FF7010" : "#F0F0F0")};
  position: relative;
  &.css-1b2abom-MuiButtonBase-root-MuiButton-root.Mui-disabled {
    pointer-events: visible;
  }
`
export const SquareItemIcon = styled(TaskAltIcon)`
  width: 16px;
  height: 16px;
  color: #ff7010;
  position: absolute;
  top: 10px;
  right: 10px;
  display: ${(props) => (props.active ? "block" : "none")};
`
export const SquareCancelIcon = styled(HighlightOffIcon)`
  width: 16px;
  height: 16px;
  color: #a5a5a5;
`
export const SquareTaskIcon = styled(TaskAltIcon)`
  width: 16px;
  height: 16px;
  color: #ff7010;
`
export const IconBtn = styled(IconButton)`
  width: 16px;
  height: 16px;
  color: #a5a5a5;
  position: absolute;
  top: 10px;
  right: 10px;
  display: ${(props) => (props.active ? "flex" : "none")};
`
export const TabWrapper = styled(Tabs)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  .css-10i97vx-MuiTabs-indicator {
    display: none;
  }
`
export const TabItem = styled(Tab)`
  width: ${(props) => (props.second ? "50%" : "33.3333333333%")};
  font-family: "SF Pro Text";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border-radius: 6px;
  text-transform: ${(props) => (props.second ? "capitalize" : "inherit")};
  background: ${(props) => (props.active ? "#FF7010" : "inherit")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#191919")};
  &.Mui-selected {
    color: #ffffff;
  }
`
export const AddBox = styled.div``
export const AddTitle = styled(Typography)`
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #191919;
`
export const AddValue = styled(Typography)`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ff7010;
`
export const FilterTabWrapper = styled(Box)`
  gap: 12px;
  display: grid;
`
export const FilterTabsList = styled(Tabs)`
  .css-heg063-MuiTabs-flexContainer {
    gap: 10px;
    flex-wrap: wrap;
  }
  .css-10i97vx-MuiTabs-indicator {
    display: none;
  }
`
export const FilterTab = styled(Tab)`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 11px 16px;
  gap: 10px;
  color: #191919;
  background: #ffffff;
  &.Mui-selected {
    color: #ffffff;
    background: #ff7010;
  }
  border: 1px solid #f0f0f0;
  border-radius: 6px;
`
export const FilterTabTitle = styled(Typography)`
  font-family: "SF Pro Text";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #a5a5a5;
`
