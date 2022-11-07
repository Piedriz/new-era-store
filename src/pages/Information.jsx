import React from 'react'
import '../styles/components/Information.css'
import { Link,useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
export const Information = () => {

  const { state: { cart }, addToBuyer } = React.useContext(AppContext);
  const form = React.useRef(null);
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email':formData.get('email'),
      'address':formData.get('address'),
      'apto':formData.get('apto'),
      'city':formData.get('city'),
      'country':formData.get('country'),
      'state':formData.get('state'),
      'cp':formData.get('cp'),
      'phone':formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="text" placeholder='Correo electrónico' name='email' />
            <input type="text" placeholder='Dirección' name='address' />
            <input type="text" placeholder='Apto' name='apto' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Pais' name='country' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Codigo postal' name='cp' />
            <input type="text" placeholder='Teléfono' name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back"><Link to='/checkout'>Regresar</Link></div>

            <div className="Information-next">
              <button onClick={()=>{handleSubmit()}} type='button'>Pagar</button>
            </div>
    

        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => {
          return (
            <div key={item.title}className="Information-item">
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
