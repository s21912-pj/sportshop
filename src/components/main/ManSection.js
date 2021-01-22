import React, { useState, useEffect } from 'react'
import MaterialCheckBox from '../filter/MaterialCheckBox'
import BrandCheckBox from '../filter/BrandCheckBox'
import SizeCheckBox from '../filter/SizeCheckBox'
import {addProductToCart,Info} from '../utils/HelperFunctions'
import { Row, Col, Card,Button,Divider } from 'antd'
import ProductType from '../filter/ProductType'
const { Meta } = Card;

const ManSection = () => {
    var products = global.products.filter(x=>x.category===2)
    const [Products, setProducts] = useState(products)

    const [Filters, setFilters] = useState({
        isEnabled: false,
        productTypeMan: {isEnabled:false,data:[]},
        sportwearMaterialType: {isEnabled:false,data:[]},
        brand: {isEnabled:false,data:[]},
        size: {isEnabled:false,data:[]},
        price: []
    })


    const showFilteredResults = (filters) => {

        let entry = {
            filters: filters
        }
        getAllProducts(entry)
    }

    const getAllProducts = (entry) => {

        if (entry.filters.isEnabled) {
            if (entry.filters.sportwearMaterialType.isEnabled) {
                let filterSet = new Set(entry.filters.sportwearMaterialType.data)
                products = products.filter(product => filterSet.has(product.material))
                setProducts(products)
            } if (entry.filters.brand.isEnabled) {
                let filterSet = new Set(entry.filters.brand.data)
                products = products.filter(product => filterSet.has(product.brand))
                setProducts(products)
            } if (entry.filters.productTypeMan.isEnabled) {
                let filterSet = new Set(entry.filters.productTypeMan.data)
                products = products.filter(product => filterSet.has(product.product_type))
                setProducts(products)
            } if (entry.filters.size.isEnabled) {
                let filterSet = new Set(entry.filters.size.data)
                products = products.filter(product => checkIfIncludes(filterSet, product))
                setProducts(products)
            }

        } if (!(entry.filters.sportwearMaterialType.isEnabled&&entry.filters.brand.isEnabled&&entry.filters.productTypeMan.isEnabled)) {
            setProducts(products)
        }
    }
    const checkIfIncludes = (filter, product) => {
        var targetValue = false;
        product.size.forEach(element => {
            if (filter.has(element)) {
                targetValue = true;
            }
        });
        return targetValue;
    }
    const handleChangeOnCheckbox = (filters, category) => {
        const newFilters = { ...Filters }

        switch (category) {
            case 'productTypeMan':
                newFilters[category].data = filters;
                newFilters.isEnabled =true;
                newFilters.productTypeMan.isEnabled = filters.length > 0 ? true : false;
                break;
            case 'sportwearMaterialType':
                newFilters[category].data = filters;
                newFilters.isEnabled = true;
                newFilters.sportwearMaterialType.isEnabled = filters.length > 0 ? true : false;
                break;
            case 'brand':
                newFilters[category].data = filters;
                newFilters.isEnabled = true;
                newFilters.brand.isEnabled = filters.length > 0 ? true : false;
                break;
            case 'size':
                newFilters[category].data = filters;
                newFilters.isEnabled = true;
                newFilters.size.isEnabled = filters.length > 0 ? true : false;
                break;
            default:
                console.log(category)
        }
        setFilters(newFilters)
        showFilteredResults(newFilters);
    }



    const renderProducts = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product.id}`} key={index} > <img style={{ width: '40%', maxHeight: '120px', objectFit: 'cover' }} src={product.image} alt="" /></a>}
            >
                  <Meta
                    title={product.title}
                    description={`Price: $${product.price}`}
                />
                <span>Size: {product.size.map(size => (<span>{size},</span>))}</span>
                <Divider/>
                <Button onClick={()=>{Info(product)}}>More details</Button>
                <Button style={{margin:'10px'}} onClick={()=>{addProductToCart(product)}}>Add to Cart+</Button>
              
            </Card>
        </Col>
    })




    return (
        <div style={{ width: '75', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Man products</h2>
            </div>
            {/* filter*/}
            <div style={{ float: 'left', margin: '3rem auto', maxWidth: '160px' }}>
                <ProductType handleProductTypeFilter={filters => handleChangeOnCheckbox(filters, "productTypeMan")} productTypes={global.product_types_man} />
                <MaterialCheckBox handleMaterialFilter={filters => handleChangeOnCheckbox(filters, "sportwearMaterialType")} />
                <BrandCheckBox handleBrandFilter={filters => handleChangeOnCheckbox(filters, "brand")} />
                <SizeCheckBox handleSizeFilter={filters => handleChangeOnCheckbox(filters, "size")} />

            </div>
            <div style={{ margin: '3rem auto' }}>
                {global.products.length === 0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>No post yet...</h2>
                    </div> :
                    <div>
                        <Row gutter={[16, 16]}>

                            {renderProducts}

                        </Row>


                    </div>
                }
                <br /><br />
            </div>
        </div>
    )
}

export default ManSection
