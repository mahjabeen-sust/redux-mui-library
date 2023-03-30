import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserThunk, ban, unBan } from '../../features/login/userSlice'
import type { RootState, AppDispatch } from '../../store'

//mui
import { Button } from '@mui/material'
import { User } from '../../type'

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, isBanned } = useSelector((state: RootState) => state.auth)

  const banUser = (user: User) => {
    dispatch(ban(user))
  }
  const unBanUser = (user: User) => {
    dispatch(unBan(user))
  }

  useEffect(() => {
    dispatch(fetchUserThunk())
  }, [])
  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            {user.firstName} {user.lastName}
            <Button size="small" onClick={() => banUser(user)}>
              Ban
            </Button>
          </li>
        ))}
      </ul>
      <h2>Banned Users</h2>
      <ul>
        {isBanned.map((user) => (
          <li key={user.email}>
            {user.firstName} {user.lastName}
            <Button size="small" onClick={() => unBanUser(user)}>
              UnBan
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
