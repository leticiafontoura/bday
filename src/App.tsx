import { useEffect, useState } from "react"
import Content from "./Content"

function App() {
 const [isRightPassword, setIsRightPassword] = useState(false)
 const [inputValue, setInputValue] = useState('')
 const [canChangePage, setCanChangePage] = useState(false)

 useEffect(() => {
  if (inputValue === 'linkinpark') {
   setIsRightPassword(true)
   setTimeout(() => {
    setCanChangePage(true)
   }, 2000)
  }
 }, [inputValue])

  return (
  <>
   {!canChangePage ? (
    <main className={`${isRightPassword ? 'fade-out' : ''} h-full flex flex-col justify-center items-center`}>
     <p className="mb-3">
      Por favor, insira a senha para entrar:
     </p>
     <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type="password"
      className="p-3 password-input"
     />
    </main>
   ) : (
    <main className={isRightPassword ? 'fade-in' : ''}>
     <Content />
    </main>
   )}
  </>
 )
}

export default App
