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
  publishDate: Date
  borrowDate: Date | null
  returnDate: Date | null
}

export type Author = {
  id: number
  authorName: string
}
