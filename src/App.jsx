import Login from "@/routes/auth/login";
import { Route, Routes } from "react-router";
import CodeVerification from "./routes/auth/code-verfication";
import ForgotPassword from "./routes/auth/forgot-password";
import ResetPassword from "./routes/auth/reset-password";
import Dashboard from "./routes/dashboard";
import Layout from "./routes/layout";
import UserManagement from "./routes/user-management";
import UserDetails from "./routes/user-management/user-details";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management">
          <Route index element={<UserManagement />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
