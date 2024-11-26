import React from "react";
import { useNavigate } from 'react-router-dom' 
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";

const URI_START = process.env.REACT_APP_BACK_URL || 'https://librosmaldonado.shop'
const URI = `${URI_START}/LibMal/Mail/Purchance`;

export default function PayPalButton() {
  const navigate = useNavigate();
  const {authUser} = useAuth();
  const paypalJson = JSON.parse(localStorage.getItem('paypalJson'));
  console.log(paypalJson);

  if (!paypalJson) {
    return <div>No se encontró información de pago en localStorage.</div>;
  }

  const onSuccess = async () => {
    try {
      await axios.post(URI, { email: authUser, paymentData: paypalJson });
      alert(`gracias por su compra, se envio un comprobante a su correo.`);
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log('Error en la respuesta del servidor:', error.response.data);
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor:', error.request);
      } else {
        console.log('Error al configurar la solicitud:', error.message);
      }
    }
  };

  const { purchase_units } = paypalJson;
  const items = purchase_units[0].items;
  const totalAmount = purchase_units[0].amount.value;

  return (
    <div id="pay_total">
      <section>
        <h2 id="list_title">Detalles de la compra</h2>
        <ul>
          {items.map((item, index) => (
            <li className="pay_list" key={index}>
              {item.name} - {item.unit_amount.value} {item.unit_amount.currency_code} x {item.quantity}
            </li>
          ))}
        </ul>
        <h3 id="list_total">Total: {totalAmount} {purchase_units[0].amount.currency_code}</h3>
      </section>
      <section id="pay_buttons">
      <PayPalButtons
        createOrder={(data, actions) => {
          try {
            return actions.order.create(paypalJson);
          } catch (error) {
            alert(`Error: ${error}`);
            return null;
          }
        }}
        onApprove={(data, actions) => {
          try {
            return actions.order.capture().then((details) => {
              onSuccess();
            });
          } catch (error) {
            console.log(`Error: ${error}`);
          }
        }}
        onError={(err) => {
          alert(`Error: ${err}`);
        }}
      />
      </section>
    </div>
  );
}
