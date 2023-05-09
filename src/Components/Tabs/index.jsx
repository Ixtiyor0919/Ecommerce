import {
  SquareItem,
  SquareCancelIcon,
  IconBtn,
  SquareTaskIcon,
  TabWrapper,
  TabItem,
  STabLIst,
  STabListItem,
  AddTitle,
  AddBox,
  AddValue,
  FilterTabWrapper,
  FilterTabTitle,
  FilterTab,
  FilterTabsList
} from "./styled"
import React from "react"
import { useTranslation } from "react-i18next"
import { AddPizzaData, TabData, TabDataThird } from "../../Api/Data"

export const StandardTabs = ({ second }) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const TabsData = second ? TabData : TabDataThird

  return (
    <TabWrapper
      value={value}
      onChange={handleChange}
      aria-label="secondary tabs example"
    >
      {TabsData?.map(({ id, label }) => (
        <TabItem
          key={id}
          value={id}
          second={second}
          active={value === id}
          label={`${label} ${+!second ? `${t("cm")}` : ""}`}
        />
      ))}
    </TabWrapper>
  )
}

export const SquareTabs = ({ cancel }) => {
  const { t } = useTranslation()
  const [selected, setSelected] = React.useState(null)
  const [active, setActive] = React.useState(false)

  const handleSelected = (id) => {
    setSelected(id)
    setActive(true)
  }
  const handleActive = () => {
    setActive(false)
  }

  return (
    <AddBox>
      {!cancel ? <AddTitle>{t("add-title")}</AddTitle> : ""}
      <STabLIst>
        {AddPizzaData?.map(({ id, text, icon, value }) => (
          <STabListItem
            key={id}
            onClick={() => handleSelected(id)}
            disabled={selected === id && cancel && active}
          >
            <SquareItem
              active={selected === id && !cancel && active}
              disabled={selected === id && cancel && active}
            >
              <IconBtn
                onClick={handleActive}
                active={selected === id && active}
              >
                {cancel ? <SquareCancelIcon /> : <SquareTaskIcon />}
              </IconBtn>
              {icon}
            </SquareItem>
            {text}
            <AddValue>{!cancel ? value + " " + "₽" : ""}</AddValue>
          </STabListItem>
        ))}
      </STabLIst>
    </AddBox>
  )
}

export const FilterTabs = ({ title, data }) => {
  const [value, setValue] = React.useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <FilterTabWrapper>
      <FilterTabTitle variant="h2">{title}</FilterTabTitle>
      <FilterTabsList
        value={value}
        onChange={handleChange}
      >
        {data?.map(({ id, name }) => (
          <FilterTab key={id} value={id} label={name} />
        ))}
      </FilterTabsList>
    </FilterTabWrapper>
  )
}
