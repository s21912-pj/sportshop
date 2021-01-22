import React,{useState} from 'react'
import {Checkbox, Collapse} from 'antd'

const {Panel} = Collapse;

const MaterialCheckBox = ({handleMaterialFilter}) => {

    const [CheckedValue, setCheckedValue] = useState([])
    const handleChangeOnMaterial=(value)=>{
        const currentIndex = CheckedValue.indexOf(value)
        const newCheckedValues = [...CheckedValue]
        currentIndex ===-1? 
            newCheckedValues.push(value) : newCheckedValues.splice(currentIndex,1)

        setCheckedValue(newCheckedValues)
        handleMaterialFilter(newCheckedValues);
    }



    return (
        <div>
            <Collapse defaultActiveKey={['1']}  >
                <Panel header="Material" >
                    {
                        global.sportwearMaterialType.map((value, index)=>(
                            <React.Fragment key={index}>
                                <Checkbox style={{margin:'0px 5px 0px 5px', display: 'block'}}
                                    onChange={()=>handleChangeOnMaterial(value.id)}
                                    type="checkbox"
                                    checked={CheckedValue.indexOf(value.id)===-1? false : true}
                                
                                />
                                <span style={{color: (CheckedValue.indexOf(value.id)===-1? '#000000' : '#08b625')}}>{value.name}</span>
                            </React.Fragment>
                        ))
                    }
                </Panel>
            </Collapse>
        </div>
    )
}

export default MaterialCheckBox
