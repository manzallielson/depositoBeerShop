import * as S from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export const Skeleton = ({ type }: SkeletonProps) => {
  return <S.SkeletonElement type={type}></S.SkeletonElement>
}
