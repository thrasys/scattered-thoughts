import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={ Home }/>
            <Route path="/about" Component={ About }/>
            <Route path="/create" Component={ Create }/>
            <Route path="/blogs/:id" Component={ BlogDetails }/>
            <Route path="*" Component={ NotFound }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
