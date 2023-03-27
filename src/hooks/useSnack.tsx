import { useContext } from 'react'

import { SnackContext } from '../context/snackContext'

export const useSnack = () => {
  return useContext(SnackContext)
}
