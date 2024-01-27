import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="grade">
      <Sidebar />
      <div className="playlist-main">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
