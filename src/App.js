import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Background from "./components/BlogBackground/Background"
import BlogBody from "./components/BlogBody/Blogbody"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
     <Background></Background>
     <BlogBody/>
     <Footer/>
    </div>
  );
}

export default App;
