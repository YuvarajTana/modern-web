import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './store'
import { Provider } from "react-redux";
import HelloWorld from './HelloWorld/HelloWorld';
import AppButton from './AppButton/AppButton';
import ProductList from "./ProductList/ProductList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <HelloWorld />
      <AppButton />
      <ProductList />
    </Provider>
  )
}

export default App
