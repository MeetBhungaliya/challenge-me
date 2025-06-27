import Login from "@/routes/auth/login";
import { Route, Routes } from "react-router";
import CodeVerification from "./routes/auth/code-verfication";
import ForgotPassword from "./routes/auth/forgot-password";
import ResetPassword from "./routes/auth/reset-password";
import Badges from "./routes/badges";
import AssignedBadge from "./routes/badges/assigned-badge";
import BadgeLayout from "./routes/badges/layout";
import ChallengeManagement from "./routes/challenge-management";
import ChallengeManagementLayout from "./routes/challenge-management/layout";
import Dashboard from "./routes/dashboard";
import Layout from "./routes/layout";
import UserManagement from "./routes/user-management";
import ChallengeDetails from "./routes/user-management/challenge-details";
import UserManagementLayout from "./routes/user-management/layout";
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
        <Route path="/user-management" element={<UserManagementLayout />}>
          <Route index element={<UserManagement />} />
          <Route path=":id">
            <Route index element={<UserDetails />} />
            <Route path="challenge-details" element={<ChallengeDetails />} />
          </Route>
        </Route>
        <Route
          path="/challenge-management"
          element={<ChallengeManagementLayout />}
        >
          <Route index element={<ChallengeManagement />} />
          <Route path=":id">
            <Route index element={<ChallengeDetails />} />
          </Route>
        </Route>
        <Route path="/badges" element={<BadgeLayout />}>
          <Route index element={<Badges />} />
          <Route path="assigned-badge" element={<AssignedBadge />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
