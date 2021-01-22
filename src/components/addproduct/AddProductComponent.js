import React, { useState } from 'react'
import './../utils/GlobalVars'
import {
    AddProductContainer,
    ProductSection,
    Header1,
    ProductForm,
    Label,
    Select
} from './ProductComponentStyles'

import { Typography, Form, Checkbox, Divider, Input } from 'antd';
import FileUpload from './../utils/FileUpload'
import { Button } from './../basestyle/ButtonElements'
const { Title } = Typography;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const plainOptions = global.allSizes;


const AddProductComponent = ({ array }) => {

    const [TitleValue, setTitleValue] = useState("")
    const [newDesc, setDescValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [QuantityValue, setQuantityValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)
    const [MaterialValue, setMaterialValue] = useState(0)
    const [BrandValue, setBrandValue] = useState(0)
    const [ProductTypeValue, setProductTypeValue] = useState(0)
    const [CheckedList, setCheckedList] = useState([]);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [BackupState, setBackupState] = useState(global.backup_status)

    const onTitleChange = (event) => {
        setTitleValue(event.target.value)
        console.log("title" + event.target.value)
    }

    const onDescChange = (event) => {
        setDescValue(event.target.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.target.value)
    }

    const onChangeQuantity = (event) => {
        setQuantityValue(event.target.value)
    }
    const onChangeCategory = (event) => {
        setCategoryValue(event.target.value)
    }
    const onChangeMaterial = (event) => {
        setMaterialValue(event.target.value)
    }
    const onChangeBrand = (event) => {
        setBrandValue(event.target.value)
    }

    const onChangeProdType =(e)=>{
        setProductTypeValue(e.target.value);
    }

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };


    const chooseProperProductTypes=(catValue)=> {
      return catValue==='1' ? global.product_types_sports :
        catValue==='2' ? global.product_types_man :
        catValue==='3' ? global.product_types_woman :
        catValue==='4' ? global.product_types_kids : [];
    }

    function addToArr() {
        if (global.base64 === '') {

            alert('foto loading!')
        } else {
            mapDataAndPush(TitleValue, global.base64, newDesc, PriceValue, QuantityValue,
                parseInt(CategoryValue), parseInt(MaterialValue), parseInt(BrandValue), parseInt(ProductTypeValue), CheckedList)
            console.log(global.products)
            alert('Product added!')
        }

    }
    const performBackup=()=>{
        global.products = global.backup
        setBackupState(false);
    }

    const mapDataAndPush = ( titleprop, imageprop, descprop, priceprop, quantityprop, catprop, materialprop, brandprop, prodtypeprop, sizeprop ) => {
        global.products.push({
            title: titleprop, image: imageprop, description: descprop, price: priceprop,
            quantity: quantityprop, category: catprop, material: materialprop, brand: brandprop,
            product_type: prodtypeprop, size: sizeprop
        })

    }
    return (
        <AddProductContainer>
            <ProductSection>
                <Header1>Add new product</Header1>
            </ProductSection>
            <Form onSubmit={null} style={{ width: '50%' }}>
                <FileUpload />
                <Divider />
                <Title>Title</Title>
                <Input onChange={onTitleChange} value={TitleValue} />
                <Divider />

                <Label>Description</Label>
                <Divider />
                <TextArea onChange={onDescChange} value={newDesc} />
                <Divider />
                <Label>Section</Label>
                <Select onChange={onChangeCategory}>
                    {global.Categories.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}

                </Select>
                <Divider />
                <Label>Material</Label>
                <Select onChange={onChangeMaterial}>
                    {global.sportwearMaterialType.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}

                </Select>
                <Divider />
                <Label>Brand</Label>
                <Select onChange={onChangeBrand}>
                    {global.brand.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}

                </Select>
                <Divider />
                <Label>Size</Label>
                <Divider />
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Check all
                </Checkbox>
                <Divider />
                <CheckboxGroup options={plainOptions} value={CheckedList} onChange={onChange} />
                <Divider />
                <Label>Price($)</Label>
                <Input onChange={onPriceChange} value={PriceValue} type="number" min="0" />
                <Divider />
                <Label>Quantity</Label>
                <Input onChange={onChangeQuantity} value={QuantityValue} type="number" min="0" />
             
                <Divider />
                <Label>Product type</Label>
                <Select onChange={onChangeProdType}>
                    {
                    chooseProperProductTypes(CategoryValue).map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}

                </Select>
                <Divider />
                <Button onClick={addToArr}>Submit</Button>
               {BackupState?
              <Button style={{ margin: '10px', color: 'green' }} onClick={() => { performBackup() }}>Backup</Button> : null
               }
            </Form>
        </AddProductContainer>
    )

}



export default AddProductComponent


function newFunction(CheckedValue, value) {
    var ss = value;
    return (CheckedValue.indexOf(value.id) === -1 ? false : true);
}

