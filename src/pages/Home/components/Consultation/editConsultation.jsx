import { useState } from 'react';
import { Form, Input, DatePicker, Button, Radio } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../../api';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/pt-br'; // Importe o locale para português do Brasil
import './EditConsultation.scss';

moment.locale('pt-br'); // Defina o locale para português do Brasil

const EditConsultation = (dataConsultation) => {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const notify = () => toast("Sucesso");
  const notifyErro = () => toast.error("Erro");

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onFinish = async (values) => {
    try {
      console.log("Chegou no onFinish")
      const data = {
        ...values.pet,        
      };
  
      //data.id = idPet;
      await updateConsultation(data);
    } catch (error) {
      console.log(error);
      notifyErro(); // Notifica erro
    }
  };
  
  const updateConsultation = async (data) => {
    try {
      console.log(data);
      console.log(dataConsultation);
      data.Id = dataConsultation.dataPet.Id;  
      const response = await api.patch(`pet/updateConsultation`, data);
      console.log(response);
      // Verifica se a atualização foi bem-sucedida
      if (response.status === 200) {
        notify(); // Notifica sucesso
        
      } else {
        notifyErro(); // Notifica erro
      }
      console.log("Apos response data: ",data);
    } catch (error) {
      console.log(error);
      notifyErro(); // Notifica erro
    }
  };

  return (
    <div className='editConsultation-div' style={{height : '100%'}}>
      <Form
        {...layout}
        name="nest-messages"        
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          marginBottom: '16px',
        }}
        validateMessages={validateMessages}
      >
        <div style={{ display: 'flex', marginBottom: '16px' }}>
          <div style={{  overflow: 'hidden', width: '200px', height: '200px' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3447/3447545.png"
              alt="Imagem Ilustrativa"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
          <Form.Item
            name={['pet', 'NomePet']}
            label="Nome do pet"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <Input />
            </Form.Item>

            <Form.Item
            name={['pet', 'DataConsulta']}
            label="Data Consulta"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
            name={['pet', 'DataRetorno']}
            label="Data Retorno"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
            name={['pet', 'Tratamento']}
            label="Recebeu algum tratamento?"
            rules={[{ required: true, message: 'Por favor, selecione uma opção de tratamento!' }]}
            labelCol={{ span: 15 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
            </Radio.Group>
            </Form.Item>

            {value === 1 && (
            <Form.Item
                name={['pet', 'QualTratamento']}
                label="Qual tratamento?"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                style={{ marginBottom: '8px' }}
            >
                <Input.TextArea />
            </Form.Item>
            )}

            <Form.Item
            name={['pet', 'Exame']}
            label="Exames"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <Input.TextArea />
            </Form.Item>

            <Form.Item
            name={['pet', 'Prescricao']}
            label="Prescrição"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <Input.TextArea />
            </Form.Item>

            <Form.Item
            name={['pet', 'Obsercacao']}
            label="Observações"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            style={{ marginBottom: '8px' }}
            >
            <Input.TextArea />
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
            <ToastContainer/>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditConsultation;
