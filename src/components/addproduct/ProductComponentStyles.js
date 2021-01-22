import styled from 'styled-components'



export const AddProductContainer = styled.div`
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 2rem;
    float: left;

`

export const ProductSection = styled.div`
    text-align: center;
    align-items: left;
    margin-bottom: 2rem;
`

export const Header1 = styled.h1`
    text-decoration:none;
    text-align: left;
    font-family: verdana;

`
export const ProductForm = styled.form`
    margin-bottom: 2rem;
    float: left;
    width:40%;
`

export const Label = styled.label`
    font-weight: bold;
    display: block;
    width: 100px;
    float: left;
`

export const Input = styled.input`
  font-family: 'PT Sans', sans-serif;
  font-size: 0.8rem;
  display: block;
  padding: 0.1rem 1rem 0 0;
  `

  export const TextArea = styled.textarea`
    font-family: 'PT Sans', sans-serif;
    font-size: 0.8rem;
    display: block;
    padding: 0.1rem 1rem 0 0;
    width: 90%;
    resize: none;
    max-width: 100%;
  `

  export const Select = styled.select`
    display: block;
    font-size:0.8rem;
    margin: 16px 0px 0px 0px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 0.8rem;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
  `