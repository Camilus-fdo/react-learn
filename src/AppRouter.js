import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function AppRouter({ routes }) {
    console.log('ssssssssss', routes)
  return (
      <Routes>
        {routes.map((routeGroup, index) => (
          <Route
            key={index}
            element={<routeGroup.layout />}
          >
            {routeGroup.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        ))}
      </Routes>
  )
}
