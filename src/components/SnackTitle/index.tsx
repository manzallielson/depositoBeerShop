import './styles.ts'
import * as S from './styles'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const SnackTitle = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>
}
