import React, { useState, useEffect } from 'react';
import "./style/ProductsManagement.css";

const mockProducts = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 10, stockQuantity: 50 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 20, stockQuantity: 30 },
  // Add more mock products here
];

function ProductsManagement() {
  const [products, setProducts] = useState(mockProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0
  });
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum of stock quantities when products change
    const totalQuantity = products.reduce((total, product) => total + parseInt(product.stockQuantity), 0);
    setSum(totalQuantity);
  }, [products]);

  const [editMode, setEditMode] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const handleChange = (e, id, field) => {
    const { value } = e.target;
    setEditedProduct(prevProduct => ({
      ...prevProduct,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stockQuantity) {
      alert('Please fill in all fields.');
      return;
    }
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1; // Generate a unique ID for the new product
    setProducts(prevProducts => [...prevProducts, { id, ...newProduct }]);
    setNewProduct({ // Reset form fields after submission
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0
    });
  };

  const handleDelete = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const handleEdit = (id, product) => {
    setEditMode(id);
    setEditedProduct(product);
  };

  const handleSave = (id) => {
    setEditMode(null);
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? editedProduct : product
      )
    );
    setEditedProduct({});
  };

  return (
    <div>
      <h2>Products Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th> {/* Add Action column for edit and delete buttons */}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.name || product.name}
                    onChange={(e) => handleChange(e, product.id, 'name')}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.category || product.category}
                    onChange={(e) => handleChange(e, product.id, 'category')}
                  />
                ) : (
                  product.category
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="number"
                    value={editedProduct.price || product.price}
                    onChange={(e) => handleChange(e, product.id, 'price')}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="number"
                    value={editedProduct.stockQuantity || product.stockQuantity}
                    onChange={(e) => handleChange(e, product.id, 'stockQuantity')}
                  />
                ) : (
                  product.stockQuantity
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <>
                    <button onClick={() => handleSave(product.id)}>Save</button>
                    <span style={{ margin: '0 5px' }}></span>
                    <button onClick={() => setEditMode(null)}>Cancel</button>
                    <span style={{ margin: '0 5px' }}></span>
                  </>
                ) : (
                  <button onClick={() => handleEdit(product.id, product)}>Edit</button>
                )}
                <span style={{ margin: '0 5px' }}></span>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={newProduct.stockQuantity} onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })} />
        <button type="submit">Add Product</button>
      </form>
      <div>Total Stock Quantity: {sum}</div>
    </div>
  );
}

export default ProductsManagement;
