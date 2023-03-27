import React from 'react'

export type User = {
  email: string
  password: string
  isAdmin: boolean
}

export type Book = {
  isbn: string
  title: string
  description: string
  publisher: string
  authors: string
  status: boolean
  borrowerId: string | null
  publishDate: Date | null
  borrowDate: Date | null
  returnDate: Date | null
}
