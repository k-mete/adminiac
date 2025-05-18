import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import FormInput from '../components/FormInput';

const ProductsPage = () => {
  // Sample product data
  const initialProducts = [
    {
      id: 1,
      name: 'Premium Laptop',
      category: 'Electronics',
      price: 1299.99,
      stock: 45,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      category: 'Audio',
      price: 199.99,
      stock: 120,
      status: 'In Stock',
    },
    {
      id: 3,
      name: 'Smart Watch',
      category: 'Wearables',
      price: 249.99,
      stock: 0,
      status: 'Out of Stock',
    },
    {
      id: 4,
      name: 'Ergonomic Chair',
      category: 'Furniture',
      price: 349.99,
      stock: 18,
      status: 'In Stock',
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: 49.99,
      stock: 230,
      status: 'In Stock',
    },
  ];

  // State
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'In Stock',
  });
  const [formErrors, setFormErrors] = useState({});

  // Table columns
  const columns = [
    { key: 'name', header: 'Product Name' },
    { key: 'category', header: 'Category' },
    {
      key: 'price',
      header: 'Price',
      render: (product) => `$${product.price.toFixed(2)}`,
    },
    { key: 'stock', header: 'Stock' },
    {
      key: 'status',
      header: 'Status',
      render: (product) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.status === 'In Stock'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {product.status}
        </span>
      ),
    },
  ];

  // Category options
  const categoryOptions = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Audio', label: 'Audio' },
    { value: 'Wearables', label: 'Wearables' },
    { value: 'Furniture', label: 'Furniture' },
    { value: 'Accessories', label: 'Accessories' },
  ];

  // Status options
  const statusOptions = [
    { value: 'In Stock', label: 'In Stock' },
    { value: 'Out of Stock', label: 'Out of Stock' },
  ];

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    // Convert numeric values
    let processedValue = value;
    if (name === 'price' || name === 'stock') {
      processedValue = value === '' ? '' : type === 'number' ? parseFloat(value) : value;
    }
    
    setFormData({
      ...formData,
      [name]: processedValue,
    });
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Product name is required';
    }
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    if (!formData.price) {
      errors.price = 'Price is required';
    } else if (isNaN(formData.price) || formData.price <= 0) {
      errors.price = 'Price must be a positive number';
    }
    if (formData.stock === '') {
      errors.stock = 'Stock is required';
    } else if (isNaN(formData.stock) || parseInt(formData.stock) < 0) {
      errors.stock = 'Stock must be a non-negative number';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Ensure numeric values
    const processedData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    if (currentProduct) {
      // Update existing product
      const updatedProducts = products.map((product) =>
        product.id === currentProduct.id
          ? { ...product, ...processedData }
          : product
      );
      setProducts(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        id: products.length > 0 ? Math.max(...products.map((product) => product.id)) + 1 : 1,
        ...processedData,
      };
      setProducts([...products, newProduct]);
    }

    // Reset form and close modal
    resetForm();
    setIsModalOpen(false);
  };

  // Handle edit product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
    });
    setIsModalOpen(true);
  };

  // Handle delete product
  const handleDelete = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      const updatedProducts = products.filter((p) => p.id !== product.id);
      setProducts(updatedProducts);
    }
  };

  // Reset form
  const resetForm = () => {
    setCurrentProduct(null);
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      status: 'In Stock',
    });
    setFormErrors({});
  };

  // Open modal for new product
  const handleAddNew = () => {
    resetForm();
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button onClick={handleAddNew}>Add New Product</Button>
      </div>

      <Card>
        <DataTable
          data={products}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>

      {/* Product Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {currentProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-accent hover:text-accent/80"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                error={formErrors.name}
                required
              />

              <FormInput
                label="Category"
                name="category"
                type="select"
                value={formData.category}
                onChange={handleInputChange}
                options={categoryOptions}
                error={formErrors.category}
                required
              />

              <FormInput
                label="Price ($)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="0.00"
                error={formErrors.price}
                required
                step="0.01"
                min="0"
              />

              <FormInput
                label="Stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleInputChange}
                placeholder="0"
                error={formErrors.stock}
                required
                min="0"
              />

              <FormInput
                label="Status"
                name="status"
                type="select"
                value={formData.status}
                onChange={handleInputChange}
                options={statusOptions}
              />

              <div className="flex justify-end space-x-2 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {currentProduct ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;