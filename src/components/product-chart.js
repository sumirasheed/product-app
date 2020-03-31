import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class ProductChart extends React.Component {
   
    constructor(props) {
        super(props);   

        this.chartReference = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
        if(this.props!==nextProps){
            this.setState({
                rawData: nextProps.products
            });
            this.prepareChartData(nextProps.products);
        }
        
    }

    prepareChartData(dataSet) {
        let rawSet = [],data=[],labels=[]
        dataSet.map((item,index)=>{
            rawSet.push(item.brandName)
        })
        rawSet.sort();
        let current = null;
        let cnt = 0;
        for (var i = 0; i < rawSet.length; i++) {
            if (rawSet[i] !== current) {
                current = rawSet[i];
                if (cnt > 0) {   
                    data.push(cnt);
                    labels.push(current)
                }
                cnt = 1;
            } else {
                cnt++;
            }
        }
        let dupData =  [{
                label: 'Brand',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE09',
                    '#00A6B4',
                    '#6800B4',
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE09',
                    '#00A6B4',
                    '#6800B4',
                    '#00A6B4',
                    '#6800B4',
                    '#B21F00',
                    '#00A6B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#501800'
                    
                ],
                data: data
            }
        ]
        this.setState({
            datasets: dupData,
            labels:labels
        })
         
    }
   
    render() {
     
        return (
            <div>
                {(this.props.products.length>0)?
                    <Doughnut
                        ref={this.chartReference}
                        data={{
                            labels: this.state.labels,
                            datasets: this.state.datasets
                        }}
                        options={{
                            title:{
                            display:true,
                            text:'Brand Share',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                    />:<h2>Loading</h2>
                }
            </div>
        );
    }
};

export default ProductChart;