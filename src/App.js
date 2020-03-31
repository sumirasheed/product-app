import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ImageCanvas from './components/image-canvas.js';
import ProductTable from './components/product-table';
import ProductChart from './components/product-chart';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			products:[],
			activeID:null
        }
    }
	componentDidMount(){
		this.fetchData();
	}
    fetchData(){
        fetch('./assets/json/test_analysis.json')
        .then(res => res.json())
        .then(data => this.setState({ products: data.ResultSet.row }))
        .catch(console.log)
	}
	
    productClick = (id) => {
        this.setState({
            activeID: id
        })
    }
	render() {
		return (
			
			<Container fluid='true'>
				<Row>
					<Col xs={6}>
						<ImageCanvas  products={this.state.products} activeID={this.state.activeID}/>
					</Col>
					<Col xs={6}>
						<ProductTable products={this.state.products} activeID={this.state.activeID} productClick={this.productClick}/>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<ProductChart  products={this.state.products} />
					</Col>
				</Row>
			</Container>
		)
	}

};

export default App;