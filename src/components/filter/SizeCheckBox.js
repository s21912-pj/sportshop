import React,{useState} from 'react'
import {Checkbox, Collapse} from 'antd'

const {Panel} = Collapse;

const SizeCheckBox = (props) => {

    const [CheckedSize, setCheckedSize] = useState([])
    const handleChangeOnSize =(value)=>{
        const currentIndex = CheckedSize.indexOf(value)
        const newCheckedValues = [...CheckedSize]
        currentIndex ===-1? 
            newCheckedValues.push(value) : newCheckedValues.splice(currentIndex,1)

        setCheckedSize(newCheckedValues)
        props.handleSizeFilter(newCheckedValues);
    }

    return (
        <div>
            <Collapse defaultActiveKey={['1']}  >
               
                <Panel header="Size" >
                    {
                        global.allSizes.map((value, index)=>(
                            <React.Fragment key={index}>
                                <Checkbox style={{margin:'0px 5px 0px 5px', display: 'block'}}
                                    onChange={()=>handleChangeOnSize(value)}
                                    type="checkbox"
                                    checked={CheckedSize.indexOf(value)===-1? false : true}
                                
                                />
                                <span style={{color: (CheckedSize.indexOf(value.size)===-1? '#000000' : '#08b625')}}>{value}</span>
                            </React.Fragment>
                        ))
                    }
                </Panel>
            </Collapse>
        </div>
    )
}

export default SizeCheckBox
