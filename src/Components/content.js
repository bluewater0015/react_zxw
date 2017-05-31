
import React,{ Component } from "react";
import { render } from "react-dom";

export default class Content extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}
	render(){
        return (
            <div className="content">
                {
                    
                    this.state.data.map((item,index) => {
                    	console.log(item)
                        return(
                        	<dl className="content_dl">
                        		<h3 className="contetn_h3 center">{item.goodsName}</h3>
	                        	<dt className="content_dt">
	                        		<img className="content_img" src = {item.goodsListImg}/>
	                        	</dt>
	                        	<dd className="content_dd center">
	                        		{item.className}
	                        	</dd>
	                        </dl>
                        )
                    })

                }
            </div>

        )
    }
	componentDidMount(){
        $.get(this.props.url,(res) => {

            this.setState({
                data:res
            })
        },"jsonp");
    }

}