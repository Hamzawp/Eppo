import Professional from './Pages/ProfessionalDashboard/Professional'
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Pages/ProfessionalDashboard/Professional'
import Transactions from './Pages/Transactions/Transactions';
import PreviousAppo from './Pages/PreviousAppo/PreviousAppo';
import Login from './Pages/Loginreg/Login';
import Feedback from './Pages/FeedBack/Feedback';
import LandingPage from './Pages/LandingPage/LandingPage';
import BrowseCategory from './Pages/BrowseCategory/BrowseCategory';
import Homepage from './Pages/Homepage/Homepage';
import PreviousApp from './Pages/PreviousApp/PreviousApp';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import SingleProffesionalPage from './Pages/SignupProfessionalPage/SignupProfessionalPage'
import SingleBusinessPage from './Pages/SingleBusinessPage/SingleBusinessPage';
import SingleCategoryPage from './Pages/SingleCategoryPage/SingleCategoryPage';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes >
        <Route path='/' element={<LandingPage />} />
        <Route path='/Professional' element={user ? <Professional /> : <Navigate to="/Login" />} />
        <Route path='/Dashboard' element={user ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path='/Transactions' element={user ? <Transactions /> : <Navigate to="/Login" />} />
        <Route path='/Feedback' element={user ? <Feedback /> : <Navigate to="/Login" />} />
        <Route path='/PreviousAppo' element={user ? <PreviousAppo /> : <Navigate to="/Login" />} />
        <Route path='/Login' element={user ? <Navigate to="/Professional" /> : <Login />} />
        <Route path='/HomePage' element={<Homepage />} />
        <Route path='/UserDashboard' element={<UserDashboard />} />
        <Route path='/PreviousApp' element={<PreviousApp />} />
        <Route path='/BrowseCategory' element={<BrowseCategory />} />
        <Route path='/SingleProffesionalPage' element={<SingleProffesionalPage />} />
        <Route path='/SingleBusinessPage' element={<SingleBusinessPage />} />
        <Route path='/SingleCategoryPage' element={<SingleCategoryPage />} />
      </Routes>

    </>
  );
}

export default App;
