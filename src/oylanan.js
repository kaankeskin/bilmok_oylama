import React from 'react';

export default class OylananKart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {oy:0};
		
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}
	
	handlePlus(event) {
		this.setState({oy: this.state.oy+1});
	}
	
	handleMinus(event) {
		this.setState({oy: this.state.oy-1});
	}
	
	render() {
		if (this.props.ad == null){
			return (
					<div className="col-lg-4 col-md-6 col-sm-12 text-center top-buffer">
						<div className="card">
							<img className="card-img-top" src={window.location.origin + this.props.img} alt={this.props.universite} />
							<div className="card-block"> </div>
							<h4 className="card-title">{this.props.universite}</h4>
							<hr className="primary" />
							<p className="card-text">
							
								<div className="input-group">
									<input type="text" className="form-control" value={this.state.oy} />
									<div className="input-group-append">
										<button className="btn btn-outline-secondary" type="button" onClick={this.handlePlus}>+1</button>
										<button className="btn btn-outline-secondary" type="button" onClick={this.handleMinus}>-1</button>
									</div>
								</div>
							</p>
						</div>
					</div>
			);
		}else {
			return (
					<div className="col-lg-4 col-md-6 col-sm-12 text-center top-buffer">
						<div className="card">
							<img className="card-img-top" src={window.location.origin + this.props.img} alt={this.props.ad} />
							<div className="card-block"> </div>
							<h4 className="card-title">{ this.props.ad}</h4>
							<hr className="primary" />
							<p className="card-text">
								<p>{this.props.universite}</p>
								<div className="input-group">
									<input type="text" className="form-control" value={this.state.oy} />
									<div className="input-group-append">
										<button className="btn btn-outline-secondary" type="button" onClick={this.handlePlus}>+1</button>
										<button className="btn btn-outline-secondary" type="button" onClick={this.handleMinus}>-1</button>
									</div>
								</div>
							</p>
						</div>
					</div>
			);
		}
	}
}
