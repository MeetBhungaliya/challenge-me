import Login from "@/routes/auth/login"
import { Route, Routes } from "react-router"
import CodeVerification from "./routes/auth/code-verfication"
import ForgotPassword from "./routes/auth/forgot-password"
import ResetPassword from "./routes/auth/reset-password"
import Dashboard from "./routes/dashboard"
import Layout from "./routes/layout"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App