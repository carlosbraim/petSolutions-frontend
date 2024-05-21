import React, { useState } from 'react';
import './client.scss';
import DataTableEdit from "../../components/home/DataTable";
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../../api';
import { ToastContainer, toast } from 'react-toastify';

function Client() { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [inputValue, setInputValue] = useState('');
  const notify = () => toast.success("Sucesso");  
  const notifyErro = () => toast.error("Erro");

  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const confirmarApagar = async (Id) => {
    console.log(`ID para apagar: ${Id}`);    
    await updateClientVet(Id);   

  };
 
  const updateClientVet = async (data) => {
    
    try {
      const dataUpdateClient = {Id:data};
      console.log("data dentro do updateClientVet ", dataUpdateClient);
       await api.patch(`clientVet/updateClientVetAtivo`, dataUpdateClient)
       .then(function(response){
        if (response.status === 200) {
          notify(); // Notifica sucesso
          fecharModal();
        } else {
          notifyErro(); // Notifica erro     
          fecharModal();
        }
       }
    ).catch(function(error){
      console.log("Erro ao executar API" + error);
      notifyErro(); // Notifica erro
    });
  }catch(error){
    console.log("Erro ao executar API" + error);
    notifyErro(); // Notifica erro
  }
  }

  return (
    <>      
      <div style={{ marginTop: '100px' }}>
        <DataTableEdit />
      </div>      

      <div style={{ marginRight: '24px',marginTop: '100px', overflow: 'hidden', width: '150px', height: '150px' }}>
        <img
          src="https://cdn.icon-icons.com/icons2/912/PNG/512/text-document-cancel-button_icon-icons.com_71554.png"
          alt="Imagem Ilustrativa"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onClick={abrirModal}
        />
      </div>

      {isModalOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Digite o ID que deseja apagar</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite o ID"
              style={styles.input}
            />
            <button onClick={()=>confirmarApagar(inputValue)} style={styles.button}>
              Confirmar
          
            </button>
            <button onClick={fecharModal} style={styles.button}>
              Cancelar
            </button>
            
          </div>
        </div>
      )}
      <ToastContainer/>
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    width: '80%',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Client;

