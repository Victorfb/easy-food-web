import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SetLocation } from './pages/SetLocation'
import { DefaultLayout } from './pages/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/setlocation" element={<SetLocation />} />
      </Route>
    </Routes>
  )
}
