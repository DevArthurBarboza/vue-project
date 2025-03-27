import express from 'express'

import ProductData from './Content/ProductData'
import CustomerData from 'CustomerData'

// const express = import('express')
// const productController = require('ProductData')
// const customerController = require('CustomerData') 

const app = express()
const port = 1717


app.get('/products', (req,res) => {
    res.json(ProductData.getProducts())
});

app.get('/product/:productId', (req,res) => {
    res.json(ProductData.getProduct())
});

app.get('/customer/:customerId', (req,res) => {
    res.json(CustomerData.getCustomer())
});

app.get('/customers', (req,res) => {
    res.json(CustomerData.getCustomers())
});

app.listen(port, () => {
    console.log('Data Provider is running');
})