import React from "react"
import { TotalBox } from "../TotalBox"
import { useTranslation } from "react-i18next";
import { SquareTabs, StandardTabs } from "../Tabs"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FilterPizza from "../../Assets/Images/FilterPizza.png"
import { Fade, Modal, Backdrop, Box, Button } from "@mui/material"
import { ModalImgBox, ModalWrapper, ModalForm, ModalTitle, ModalFormTop, ModalInfoIcon } from "./styled"

const FilterModal = () => {
  const {t} = useTranslation();
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const style = {
    background: 'rgba(25, 25, 25, 0.4)',
    backdropFilter: 'blur(16px)',
  }
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Filter pizza
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        sx={style}
      >
        <Fade in={open}>
          <ModalWrapper>
            <ModalImgBox>
              <Box component="img" src={FilterPizza} width="100%" height="100%" />
            </ModalImgBox>
            <ModalForm>
              <ModalFormTop>
                <WhatshotIcon sx={{color: "#E23535"}} />
                <ModalTitle>{t("filter-modal-title")}</ModalTitle>
                <ModalInfoIcon />
              </ModalFormTop>
              <SquareTabs cancel />
              <StandardTabs second />
              <StandardTabs />
              <SquareTabs />
              <TotalBox value="2 379 ₽" weight="400 г" />
            </ModalForm>
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  )
}

export default FilterModal;