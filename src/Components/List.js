
import React,{ Component } from "react";
import { render } from "react-dom";
import Ajax from "../service/baseService";
export default class List extends Component{
	constructor(props){
		super(props);
		this.state={
			bannerList:[],
			listData: []
		}
	}
	
	componentDidMount(){
		var _this = this;
		Ajax({
			"url":"http://datainfo.duapp.com/shopdata/getGoods.php",
			"method": "get",
			"dataType": "jsonp",
			"success": function(data){
				//console.log("this",_this);
				_this.setState({
					bannerList: data,
					listData: data
				})
			}
		})
	}
	render(){
		//console.log("this===",this.state.bannerList.length);
		return(
			<div className="list">
				<div className="list_banner">
					<ul className="bannner_container">
						{	
							this.state.bannerList.map((item,index)=>{
								//console.log(item);
								return(
									<li key={index} className="banner_li">
										<img className="banner_img" src = {item.goodsListImg} />
									</li>
								)

							})
						}
					</ul>
				</div>
				<div className="list_content">
					{
						this.state.listData.map((item,index)=>{
							//console.log(item);
							return(
								<dl key={index} className="list_data">
									<dt className="list_dt">
										<img className="list_img" src = {item.goodsListImg} />
									</dt>
									<dd className="list_dd">
										<p className="list_text">{item.goodsName}</p>
										<p className="list_text">￥{item.price}</p>
									</dd>
								</dl>
							)
						})
					}
				</div>
			</div>
		)
	}
}





