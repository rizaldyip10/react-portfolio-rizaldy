import NavBar from "../components/navBar";
import "./home.css";

function Home() {
  return (
    <div id="header">
      <div className="container">
        <NavBar />
        <div className="header-text">
          <p>Hello, I am</p>
          <h1>
            <span>Rizaldy</span> Iman Putra
          </h1>
          <h3>Aerospace Engineer | Soon to be Web Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
