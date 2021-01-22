import React from 'react'
import { Descriptions,Divider } from 'antd';

const MiniProductDetails = ({item}) => {
    return (
        <div>
        <Descriptions title="Product info">
                <div>Description: {item.description}</div>
        </Descriptions>
          <Divider/>
          <span>Size: {item.size.map(size => (<span>{size},</span>))}</span>
        </div>
    )
}

export default MiniProductDetails
