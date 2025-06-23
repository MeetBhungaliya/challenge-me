import Login from "@/routes/auth/login"
import { Route, Routes } from "react-router"
import ForgotPassword from "./routes/auth/forgot-password"
import CodeVerification from "./routes/auth/code-verfication"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-vefication" element={<CodeVerification />} />
    </Routes>
  )
}

export default App