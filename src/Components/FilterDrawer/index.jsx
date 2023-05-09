import {
  CheeseData,
  ComponentData,
  GeneralData,
  MeatData,
} from "../../Api/Data"
import {
  FilterCloseBtn,
  FilterBottom,
  FilterWrapper,
  TabsWrapper,
  FilterTitle,
  FilterCloseIcon,
  FilterToolbar
} from "./styled"
import * as React from "react"
import { FilterTabs } from "../Tabs"
import { MainBtn } from "../MainBtn"
import { OutlinedBtn } from "../OutlinedBtn"
import { useTranslation } from "react-i18next"
import appFilterWidth from "../../Utils/Constant"
import { Box, Drawer, CssBaseline } from "@mui/material"

export const FilterDrawer = (props) => {
  const { t } = useTranslation()
  const { window, open, handleToggle } = props

  const drawer = (
    <FilterWrapper>
      <FilterToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <FilterTitle>{t("filters")}</FilterTitle>
        <FilterCloseBtn onClick={handleToggle}>
          <FilterCloseIcon />
        </FilterCloseBtn>
      </FilterToolbar>
      <TabsWrapper>
        <FilterTabs title={`${t("general")}`} data={GeneralData} />
        <FilterTabs title={t("cheese")} data={CheeseData} />
        <FilterTabs title={t("meat")} data={MeatData} />
        <FilterTabs title={t("component")} data={ComponentData} />
      </TabsWrapper>
      <FilterBottom>
        <OutlinedBtn width="50%">{t("reset")}</OutlinedBtn>
        <MainBtn width="50%">{t("apply")}</MainBtn>
      </FilterBottom>
    </FilterWrapper>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { md: open && appFilterWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          anchor="right"
          onClose={handleToggle}
          ModalProps={{
            keepMounted: true,
            slotProps: {
              root: {
                style: {
                  //   background: "rgba(25, 25, 25, 0.4)",
                  backdropFilter: "blur(16px)",
                },
              },
            },
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: appFilterWidth,
              borderLeft: "2px solid rgb(199 199 199 / 12%)",
              backgroundImage: "none",
              boxShadow: "inherit",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
};
