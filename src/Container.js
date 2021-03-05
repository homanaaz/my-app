import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { connect } from "react-redux";

const App = () => {
	return (
	<div className="">
	 <Header/>
	 <HomePage/>
	 <Footer/>
    </div>
	)
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
