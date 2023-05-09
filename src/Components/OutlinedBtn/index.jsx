import { BtnOutlined } from "./styled";

export const OutlinedBtn = ({ children, width }) => {
  return <BtnOutlined width={width} variant="outlined">{children}</BtnOutlined>
}
