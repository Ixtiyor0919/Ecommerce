import { MainBtn } from "../MainBtn";
import { TotalWrapper, TotalIner, TotalText } from "./styled";
import { useTranslation } from "react-i18next";

export const TotalBox = ({value, text, weight}) => {
    const {t} = useTranslation();
    return(
        <TotalWrapper>
            <TotalIner>
                <TotalText>{t('total-text')}: {value}</TotalText>
                {weight}
            </TotalIner>
            <MainBtn width="155px">{t('main-btn')}</MainBtn>
        </TotalWrapper>
    )
}