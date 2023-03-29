import { useContext } from 'react'

import { SnackContext } from '../context/SnackContext'

export const useSnack = () => {
  return useContext(SnackContext)
}
