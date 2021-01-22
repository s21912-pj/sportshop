import React,{useState} from 'react'
import {Checkbox, Collapse} from 'antd'


const {Panel} = Collapse;

const BrandCheckBox = (props) => {
    const [CheckedBrand, setCheckedBrand] = useState([])
    const handleChangeOnBrand=(value)=>{
        const currentIndex = CheckedBrand.indexOf(value)
        const newCheckedValues = [...CheckedBrand]
        currentIndex ===-1? 
            newCheckedValues.push(value) : newCheckedValues.splice(currentIndex,1)

        setCheckedBrand(newCheckedValues)
        props.handleBrandFilter(newCheckedValues);
    }

    return (
        <div>
            <Collapse defaultActiveKey={['1']}  >
                <Panel header="Brand" >
                    {
                        global.brand.map((value, index)=>(
                            <React.Fragment key={index}>
                                <Checkbox style={{margin:'0px 5px 0px 5px' ,display: 'block'}}
                                    onChange={()=>handleChangeOnBrand(value.id)}
                                    type="checkbox"
                                    checked={CheckedBrand.indexOf(value.id)===-1? false : true}
                                
                                />
                                <span style={{color: (CheckedBrand.indexOf(value.id)===-1? '#000000' : '#08b625')}}>{value.name}</span>
                            </React.Fragment>
                        ))
                    }
                </Panel> 
            </Collapse>
        </div>
    )
}

export default BrandCheckBox;
