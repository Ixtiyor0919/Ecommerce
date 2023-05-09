import { MainBtnStyled } from "./styled"

export const MainBtn = ({ children, width }) => {
  return (
    <MainBtnStyled variant="contained" width={width}>
      {children}
    </MainBtnStyled>
  )
};
