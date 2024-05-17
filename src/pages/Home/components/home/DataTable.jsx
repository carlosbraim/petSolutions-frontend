
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
        
        
        
        