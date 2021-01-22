import React,{useState} from 'react'
import {Checkbox, Collapse} from 'antd'

const {Panel} = Collapse;

const ProductType = ({handleProductTypeFilter,productTypes}) => {

    const [CheckedProductTypeWomanValue, setCheckedProductTypeWomanValue] = useState([])
    const handleOnChangeProductTypeWoman=(value)=>{
        const currentIndex = CheckedProductTypeWomanValue.indexOf(value)
        const newCheckedProductTypeWomanValues = [...CheckedProductTypeWomanValue]
        currentIndex ===-1? 
            newCheckedProductTypeWomanValues.push(value) : newCheckedProductTypeWomanValues.splice(currentIndex,1)

        setCheckedProductTypeWomanValue(newCheckedProductTypeWomanValues)
        handleProductTypeFilter(newCheckedProductTypeWomanValues);
    }



    return (
        <div>
            <Collapse defaultActiveKey={['1']}  >
                <Panel header="Category" >
                    {
                        productTypes.map((value, index)=>(
                            <React.Fragment key={index}>
                                <Checkbox style={{margin:'0px 5px 0px 5px', display: 'block'}}
                                    onChange={()=>handleOnChangeProductTypeWoman(value.id)}
                                    type="checkbox"
                                    checked={CheckedProductTypeWomanValue.indexOf(value.id)===-1? false : true}
                                
                                />
                                <span style={{color: (CheckedProductTypeWomanValue.indexOf(value.id)===-1? '#000000' : '#08b625')}}>{value.name}</span>
                            </React.Fragment>
                        ))
                    }
                </Panel>
            </Collapse>
        </div>
    )
}

export default ProductType