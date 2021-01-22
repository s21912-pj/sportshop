import React, { useState } from 'react'
import { deleted_success } from '../utils/HelperFunctions'
import { Row, Col, Card, Button, Divider } from 'antd'
const { Meta } = Card;



global.backup  = global.products;
const RemoveProducts = () => {

    const [Products, setProducts] = useState(global.products)

    const removeFromProductList = (index) => {
        var newState = [...Products]
        newState.splice(index, 1);
        global.products = newState;
        setProducts(newState)
        deleted_success();
        global.backup_status = true;

    }

    const renderProducts = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product.id}`} > <img style={{ width: '40%', maxHeight: '120px', objectFit: 'cover' }} src={product.image} alt="" /></a>}
            >
                <Meta
                    title={product.title}
                    description={`Price: $${product.price}`}
                />
                <span>Size: {product.size.map(size => (<span>{size},</span>))}</span>
                <Divider />
                <Button style={{ margin: '10px', color: 'red' }} onClick={() => { removeFromProductList(index) }}>Remove</Button>
            </Card>
        </Col>
    })



    return (
        <div style={{ width: '75', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Helper Page to remove products</h2>

            </div>
            <div style={{ margin: '3rem auto' }}>
                {global.products.length === 0 ?
                    <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>There is no product to remove...</h2>
                    </div> :
                    <div>

                        <Row gutter={[16, 16]}>
                      
                            {renderProducts}

                        </Row>

                        <div>
                          
                        </div>
                    </div>
                }
                <br /><br />
            </div>
        </div>
    )
}

export default RemoveProducts
