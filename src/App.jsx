import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Templates from "./pages/Templates";
import Details from "./pages/Details";
import MyResume from "./pages/MyResume";
import About from "./pages/About";
import PreviewPage from "./pages/Preview";
import {FormProvider} from "./context/FormContext"

function App() {
  return (
    <FormProvider>
    <Router>
      <Navbar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/details" element={<Details />} />
        <Route path="/myresume" element={<MyResume />} />
        <Route path="/about" element={<About />} />

        <Route path="/preview/*" element={<PreviewPage />} />
      </Routes>
      </div>
    </Router>
    </FormProvider>

  )
}
export default App;


