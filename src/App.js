import './App.css';

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Photos from "./components/Photos";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Address from "./components/Address";
import $ from "jquery";
import SideBar from "./components/SideBar";


function App() {

    return (

        <div className="App">
            <Header/>
            <AboutUs/>
            <Services/>
            <Photos/>
            <Welcome/>
            <Form/>
            <Address/>
        </div>
    );
}

export default App;
