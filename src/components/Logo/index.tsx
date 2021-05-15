import React from 'react'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImagaUrl'
import * as S from './styles'

const Logo = ({alternativeText, url}: LogoProps) => <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />

export default Logo
