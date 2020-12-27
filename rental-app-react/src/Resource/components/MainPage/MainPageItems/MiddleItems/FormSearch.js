import React, {Component} from 'react';
class FormSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            districts:[],
            types:[
                "Phòng trọ",
                "Chung cư mini",
                "Nhà nguyên căn",
                "Chung cư nguyên căn",
            ],
            prices:[
                "2000000VND - 3000000VND",
                "3000000VND - 5000000VND",
                "> 5000000VND"
            ],
            areas:[
                "< 30m2",
                "30m2 - 50m2",
                "> 50m2"
            ]

        }
    }
    onChange = (event) =>{
        if(event.target.name == 'city'){
            let districts = this.state.districts;
            districts=[];
            const {dataLocation} = this.props;
            for(let i=1; i<=63;i++){
                if(event.target.value == dataLocation[0][i].name){
                    console.log(Object.values(dataLocation[0][i].districts).length)
                    for(let j = 0; j<Object.values(dataLocation[0][i].districts).length;j++ ){
                        districts.push(Object.values(dataLocation[0][i].districts)[j]);
                    }
                    this.setState({
                        districts
                    })
                    break;
                }
            }  
        }
    }
    render(){
        const {districts, types, prices, areas} = this.state;
        const {dataLocation} = this.props;
        
        let city = [];
        let districtsList = {
            city:'',
            districts:[]
        }
        if(dataLocation){
            for(let i=1; i<=63;i++){
                city.push(dataLocation[0][i].name)
            }    
        }
        let listCity = '';
        if(city.length >0){
            listCity = city.map((index)=>
            <option value={index} key = {index}>{index}</option>
            )
        }
        let listDistrict = districts.map((index)=>
        <option value={index} key = {index}>{index}</option>
        )
        let listPrice = prices.map((x, index)=>
        <option value={index} key={index}>{x}</option>
        )
        let listType = types.map((x,index)=>
        <option value={index} key={index}>{x}</option>
        )
        let listArea = areas.map((x,index)=>
        <option value={index} key={index}>{x}</option>
        )
        return(
            <div className="search-box">
                   <select name="city" id="" onChange={this.onChange}>
                       <option value="">City</option>
                       {listCity}
                   </select>
                   <select name="districts" id="" onChange={this.onChange}>
                       <option value="">District</option>
                       {listDistrict}
                   </select>
                   <select name="type" id="">
                       <option value="">Property type</option>
                       {listType}
                   </select>
                  
                   <select name="price" id="">
                       <option value="">Any price</option>
                        {listPrice}
                   </select>
                   <select name="area" id="">
                       <option value="">Area</option>
                       {listArea}
                   </select>
                   <button>Search</button>
               </div>
        )
    }
}
export default FormSearch;