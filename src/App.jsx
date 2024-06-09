import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import About from "./Components/About"
import ActivateAcount from "./Components/ActivateAcount"
import Main from "./Components/Main"
import ForgotPassword from "./Components/ForgotPassword"
import Bookmarks from "./Hero/BookMarks"
import HelpCenter from "./Hero/HelpCenter"
import Premium from "./Hero/Premium"
import List from "./Hero/List"
import Monetization from "./Hero/Monetization"
import TwitterAds from "./Hero/TwitterAds"
import Settings from "./Hero/Settings"
import SidebarMenu from "./Hero/Jobs"
import UserProfile from "./Hero/UserProfile"
import JobSearch from "./Hero/Jobs"
import Message from "./Hero/Message"
import Notification from "./Hero/Notification"
import Grok from "./Hero/Grok"

function App() {

  return (
    <>
    <Router >
    

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/activate" element={<ActivateAcount />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/profile" element={<UserProfile/>} />

        <Route path="/helpcenter" element={<HelpCenter/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/premium" element={<Premium/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/monetization" element={<Monetization/>} />
        <Route path="/ads" element={<TwitterAds/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/jobs" element={<JobSearch/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/grok" element={<Grok/>} />












        

     </Routes>
     </Router>
    </>
  )
}

export default App
