import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
class ProductTable extends React.Component {
  
	constructor(props){
        super(props);
		this.state={
            products:props.products, 
        }
        this.columns = []
    }
    componentDidMount(){
        this.columns = [{
            dataField: 'productShortName',
            text: 'Product Name',
            sort: true,
            filter: textFilter({
                onFilter: (filterValue,newState) => { 
                    console.log(filterValue,newState)
                }
            })
        }, {
            dataField:'brandName',
            text:'Brand Name',
            sort: true,
            filter: textFilter({
                onFilter: (filterValue,newState) => { 
                    console.log(filterValue,newState)
                }
            })
        }, {
            dataField: 'shelfLevel',
            text: 'Shelf Level',
            sort: true,
            filter: textFilter({
                onFilter: (filterValue,newState) => { 
                    console.log(filterValue,newState)
                }
            }),
        }];
        
               
        this.rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.props.productClick(row.id);
                var el = document.querySelector('.image-container');
                el.scrollTo(row.x, row.y);
            }
        };
    }       
    handleDataChange = () => {
        let boxes = document.getElementsByClassName('box');

    }
    render() {
        return (
            <div className="table-container">
                {(this.props.products.length>0)?
                    <BootstrapTable keyField='id' data={ this.props.products } columns={ this.columns }  filter={ filterFactory() } filterPosition="top" rowEvents={this.rowEvents}  onDataSizeChange={ this.handleDataChange }></BootstrapTable>
                    : <h2>Loading items...</h2>
                }
            </div>
        );
    }
};

export default ProductTable;