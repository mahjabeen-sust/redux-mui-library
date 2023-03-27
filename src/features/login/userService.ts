import { useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from '../../store'

type Props = {
  email: string
  password: string
}

export function isUser({ email, password }: Props) {
  const users = useSelector((state: RootState) => state.auth.users)
  const payload = users.find((user) => user.email === email && user.password === password)
  return payload
}
