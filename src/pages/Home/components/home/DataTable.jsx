/*
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
//import { ClientService } from './client/clientsData';

export default function DataTableEdit() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);
    const ClientService = [{code:'0001', name:'Carlos', inventoryStatus:'Watch', price:'$65.00'},{code:'0002', name:'Bruno', inventoryStatus:'Watch', price:'$5.00'}]

    useEffect(() => {
        //ClientService.getProductsMini().then((data) => setProducts(data));
        setProducts(ClientService)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    

    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ maxWidth: '100%' }}>
                <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
        */



import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import  ClientsData  from '../home/client/ClientsData';

export default function SingleColumnDemo() {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            const data = await ClientsData();
            console.log("Dados retornados:", data);
            // Faça algo com os dados aqui
            setProducts(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }
    
    

    useEffect(() => {
       // ClientsData.getProductsMini().then(data => setProducts(data));      
       fetchData();      
       
    }, []);

    return (
        <>
        {
            products ? (
                <div className="card">
                    <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="id" header="Id" sortable ></Column>
                        <Column field="nome" header="Nome" sortable ></Column>
                        <Column field="telefone" header="Telefone" sortable></Column>
                        <Column field="endereco" header="Endereço" sortable ></Column>
                    </DataTable>
                </div>
            ) : (
                <div><p>Table</p></div>
            )
            
        }
        </>       
        
    );
}
        
        
        
        