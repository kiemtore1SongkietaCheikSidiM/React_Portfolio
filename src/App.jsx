import React, { useState, useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Connexion from './pages/Connexion'
import Accueil from './pages/Accueil'
import Analyse from './pages/Amalyse'
import Calendrier from './pages/Calendrier'
import Client from './pages/Client'
import Compte from './pages/Compte_rendu'
import Ecommerce from './pages/Ecommerce'
import Inventaire from './pages/Inventaire'
import Message from './pages/Message'
import Parametre from './pages/Parametre'
import Transactions from './pages/Transactions'






function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // Fetch products from the server
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data)=> setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Handle product submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert('Please enter product name and price');

    const newProduct = { name, price };

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((product) => {
        setProducts([...products, product])
        setName('')
        setPrice('')
      })
      .catch((error) => console.error('Error uploading product:', error));
  };

  return (
    <>
    <div className="App">
      <h1>Product Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className='p-5 border-b bg-amber-300'>Add Product</button>
      </form>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

function Essai(){
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Connexion/>} />
        <Route path='Accueil' element={<Accueil/>}/>
        <Route path='Analyse' element={<Analyse/>}/>
        <Route path='Calendrier' element={<Calendrier/>}/>
        <Route path='Client' element={<Client/>}/>
        <Route path='Compte' element={<Compte/>} />
        <Route path='Ecommerce' element={<Ecommerce/>}/>
        <Route path="Inventaire" element={<Inventaire/>}/>
        <Route path="Message" element={<Message/>} />
        <Route path='Parametre' element={<Parametre/>}/>
        <Route path='Transactions' element={<Transactions/>}/>
     </Routes>
   </BrowserRouter>
  )
}
export default Essai