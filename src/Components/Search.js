
import React,{ Component } from "react";
import { render } from "react-dom";

export default class Search extends Component{
	render(){
		return(
			<div className="search center">
				<div className="search_box center">
					<input type="text" placeholder="请输入搜索内容" className="search_input center" />
				</div>
			</div>
		)
	}
}



