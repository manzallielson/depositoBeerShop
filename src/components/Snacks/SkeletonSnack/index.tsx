import * as S from './styles'
import { Skeleton } from '../../Skeleton'

export const SkeletonSnack = () => {
  return (
    <div className='skeleton-wrapper'>
      <S.Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        <Skeleton type='text' />
        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div>
      </S.Container>
    </div>
  )
}
