import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SetLocation } from './pages/SetLocation'
import { DefaultLayout } from './pages/layouts/DefautlLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/setlocation" element={<SetLocation />} />
      </Route>
    </Routes>
  )
}
