import { useState } from 'react'
import Store from "./pages/Store"
import Layout from "./components/Layout/Layout.jsx"

import './App.css'

function App() {
  return <div>
      <Layout>
        <Store></Store>
      </Layout>
    </div>
}

export default App
