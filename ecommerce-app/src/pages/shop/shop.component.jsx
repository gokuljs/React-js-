import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data.js';


class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA,
        }
    }
    render(){
        const {collections}=this.state;
        console.log("this is my collection ")
        console.log(collections);
        return (
            <div className="shop-page">
            {
                collections.map(({id,...othercollectionsprops})=>(
                    <CollectionPreview key={id} {...othercollectionsprops}/>
                ))
                
            }

            </div>
        )
    }
}

export default ShopPage;