//index.js
import "../css/reset.css";
import "../css/common.css";
import React,{ Component } from "react";
import { render } from "react-dom";

import{
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";
import { createStore } from "redux";
import { NavLink } from 'react-router-dom';

import Home from "../Components/Home";
import Classify from "../Components/Classify";
import Shop from "../Components/Shop";
import Owner from "../Components/Owner";
import More from "../Components/More";
class Main extends Component{
	render(){
		return(
			<Router>
			    <div className="container">
			    	
			    	<div className="content">
			    		<Route exact path="/" component={Home}/>
				      	<Route path="/classify" component={Classify}/>
				      	<Route path="/shop" component={Shop}/>
				      	<Route path="/owner" component={Owner}/>
				      	<Route path="/more" component={More}/>
			    	</div>
			      	<ul className="footer">
				        <li className="item center"><NavLink className="center" activeClassName="selected" exact to="/">首页</NavLink></li>
				        <li className="item center"><NavLink className="center" activeClassName="selected" to="/classify">分类</NavLink></li>
				        <li className="item center"><NavLink className="center" activeClassName="selected" to="/shop">购物车</NavLink></li>
				        <li className="item center"><NavLink className="center" activeClassName="selected" to="/owner">我的秀</NavLink></li>
				        <li className="item center"><NavLink className="center" activeClassName="selected" to="/more">更多</NavLink></li>
			      	</ul>
			      	
			    </div>
			</Router>
		)
	}
}
render(
	<Main />,
	document.getElementById("root")
);
