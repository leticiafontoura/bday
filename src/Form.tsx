/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDatabase, push, ref } from 'firebase/database'
import { useState } from 'react'
import { app } from './firebase'

function FormComponent() {
 const database = getDatabase(app)
 const [isSaved, setIsSaved] = useState(false)
 const [formData, setFormData] = useState({
  guestName: '',
  invite: '',
  companion: false,
  companionName: ''
 })

 const handleInputChange = (event: any) => {
  const { name, value, type, checked } = event.target
  setFormData({
   ...formData,
   [name]: type === 'radio' ? value : type === 'checkbox' ? checked : value.trim()
  })
 }

 const sendConfirmation = (event: any) => {
  event.preventDefault()
  push(ref(database), {
   guestName: formData.guestName,
   invite: formData.invite
  }).then(() => setIsSaved(true)).catch(() => console.log('nao salvou'))
  console.log('Form data:', formData)
 }

 const handleResetForm = () => {
  setIsSaved(false)
  setFormData({
   guestName: '',
   invite: '',
   companion: false,
   companionName: ''
  })
 }

 return (
  <form onSubmit={sendConfirmation} className="invite-form">
   {isSaved ? (
    <div>
     {formData.invite === 'yes' ? (
      <p>
       Obrigada pela confirmação e nos vemos em breve ^^
      </p>
     ) : (
      <p>
       Falo nada, viu ¬¬
      </p>
     )}
     <button className="submit-btn" type="button" onClick={handleResetForm}>
      Preencher novamente
    </button>
    </div>
   ) : (
    <>
    <div className="mb-3">
     <label htmlFor="guestName">Nome: </label>
     <input
      name="guestName"
      id="guestName"
      value={formData.guestName}
      onChange={handleInputChange}
      required
      className="p-2"
     />
    </div>
    <div>
     <p className="mb-3">Você vai... né?</p>
     <div className="mb-3">
       <label htmlFor="yes" className="radio-container">
       <input
        type="radio"
        id="yes"
        name="invite"
        value="yes"
        onChange={handleInputChange}
       />
        Sim
       </label>
     </div>
     <div className="mb-2">
      <label htmlFor="no" className="radio-container">
      <input
       type="radio"
       id="no"
       name="invite"
       value="no"
       onChange={handleInputChange}
      />
       Não
      </label>
     </div>
    </div>
    {formData.invite === 'yes' && (
     <div className="mb-3 mt-3">
      <label htmlFor="companion" className="checkmark-container">
      <input
       type="checkbox"
       name="companion"
       id="companion"
       checked={formData.companion}
       onChange={handleInputChange}
      />
       <span className="checkmark"></span>
       Vou levar acompanhante
      </label>
      {formData.companion && (
       <div>
        <label htmlFor="companionName" className="mb-3 block">Nome da pessoa acompanhante:</label>
        <input
         name="companionName"
         id="companionName"
         value={formData.companionName}
         onChange={handleInputChange}
         required
         className="p-2"
        />
       </div>
      )}
     </div>
    )}
    <button className="submit-btn" type="submit">
     Enviar
    </button>
    </>
   )}
  </form>
 )
}

export default FormComponent
