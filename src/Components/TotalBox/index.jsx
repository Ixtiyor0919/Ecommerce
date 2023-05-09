import { MainBtn } from "../MainBtn";
import { useTranslation } from "react-i18next";
import { TotalWrapper, TotalIner, TotalText } from "./styled";

export const TotalBox = ({value, weight}) => {
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