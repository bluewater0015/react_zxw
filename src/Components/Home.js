
import React,{ Component } from "react";
import { render } from "react-dom";
import "../css/home.css";
import "../css/reset.css";
import Header from "./Header";
import Search from "./Search";
import List from "./List";

export default class Home extends Component{
	render(){
		return(
			<div className="home">
				<Header />
				<div className="home_content">
					<Search />
					<List />
				</div>
			</div>
		)
	}
}