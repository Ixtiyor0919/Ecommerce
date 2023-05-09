import React from "react"
import { FilterBtn } from "./styled"
import { useTranslation } from "react-i18next"
import { Language } from "../../Modules/Languages"
import FilterModal from "../../Components/FilterModal"
import { FilterDrawer } from "../../Components/FilterDrawer"
import { HiOutlineFilter } from "react-icons/hi"

function Home() {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <>
      Home
      <Language />
      <FilterModal />
      <FilterBtn
        startIcon={
          <HiOutlineFilter
            style={{ width: "16px", height: "16px", color: "#FF7010" }}
          />
        }
        onClick={handleToggle}
      >
        {t("filters")}
      </FilterBtn>
      <FilterDrawer open={open} handleToggle={handleToggle} />
    </>
  )
}
export default Home
