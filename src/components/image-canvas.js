import React from 'react';
class ImageCanvas extends React.Component {
  
	constructor(props){
        super(props);
		this.state={
            products:[]
        }
    }
	componentDidUpdate(preveProps){
        if(preveProps.products!=this.state.products)
        this.setState({
            products: this.props.products
        },()=>{
            this.drawData(this.state.products); 
        });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps!=this.props.activeID){
            this.highlightBox(nextProps.activeID,this.props.activeID)
        }
        
    }
    highlightBox(newID,prevID){
        if(newID!=null&&newID!=prevID){
            document.getElementById(newID).classList.add('active');
            if(prevID!=null){
                document.getElementById(prevID).classList.remove('active'); 
            }
        } else{
            let elmnts = document.getElementsByClassName('box');
            for(let i=0;i<elmnts.length;i++){
                elmnts[i].classList.remove('active');
            }
        }
    }
    drawData = (products) => {
        if(products.length>0){
            products.map((item,index)=>{
                let name = document.createElement('span');
                name.setAttribute('class','name-box');
                name.textContent = item.productShortName;
                let box = document.createElement('div');
                let styleStr = 'top:'+item.y+'px;left:'+item.x+'px;width:'+item.width+'px;height:'+item.height+'px;';
                box.setAttribute('class','product-box');
                box.setAttribute('style',styleStr);
                box.setAttribute('id',item.id);
                box.setAttribute('key',index);
                box.appendChild(name);
                document.getElementById('image-container').appendChild(box);
            })
        }
    }
    // drawBox = (item,c,style) =>{
    //     let ctx = c.getContext("2d");
    //     ctx.beginPath();
    //     ctx.rect(item.x, item.y, item.width, item.height);
    //     ctx.lineWidth = 3;
    //     ctx.strokeStyle = style;
    //     ctx.stroke();
    // }
    // drawText = (item,c,style,text) =>{
        
    //     console.log(item.productShortName)
    //     var ctx = c.getContext("2d");
    //     ctx.font = "16px Arial";
    //     ctx.fillStyle = style;
    //     (text)?ctx.fillText(item.productShortName, item.x+5, item.y+5):ctx.fillText("", item.x+5, item.y+5);
    // }
    // mouseMove = (e) => {
    //     let canvas = document.getElementById("imageCanvas");
    //     let mousePos = this.getMousePos(e,canvas);
    //     let mouseX = parseInt(mousePos.mouseX),
    //     mouseY = parseInt(mousePos.mouseY);
    //     this.props.products.map((item,index)=>{
    //         if (this.isPointInside(mouseX,mouseY,item.x,item.y,item.width,item.height)) {
    //         // if (this.isPointInside(mouseX,mouseY,canvas)) {
    //             this.drawText(item,canvas,"yellow",true);
    //             this.drawBox(item,canvas,"yellow")
    //         } else {
    //             this.drawData();
    //             this.drawBox(item,canvas,"blue")
    //         }
    //     })
    // }
    // getMousePos = (e,canvas) => {
    //     let canvasContainer = document.getElementById("image-container");
    //     let rect = canvas.getBoundingClientRect();
    //     let mouseX = e.pageX + canvasContainer.scrollLeft - rect.left;
    //     let mouseY =  e.pageY + canvasContainer.scrollTop - rect.top;
    //     let mousePos = {
    //         mouseX: mouseX,
    //         mouseY: mouseY
    //     }
    //     return mousePos;
    // }
    // isPointInside = (mouseX, mouseY, x,y,width,height) => {
    //     return (mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height);
    //     // let ctx = canvas.getContext("2d");
    //     // return ctx.isPointInPath(mouseX, mouseY)
    // }

	render() {
		return (
            <div className="image-container" id="image-container">
                <img id="rackImage" src="./assets/images/test_image.jpg" alt="products"/>
                {/* <canvas id="imageCanvas" onMouseMove={this.mouseMove}></canvas> */}
            </div>
                
    	)
	}
};

export default ImageCanvas;