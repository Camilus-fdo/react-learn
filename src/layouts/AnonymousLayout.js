import React from 'react'
import { Outlet } from 'react-router-dom';

export default function AnonymousLayout() {
  return (
    <div>
      <h1>AnonymousLayout</h1>
      <Outlet />
    </div>
  )
}
