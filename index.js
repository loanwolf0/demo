// Function to fetch and display the recently added products
function fetchProducts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('productList');
      productList.innerHTML = '';

      products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product Name: ${product.title}, Selling Price: $${product.body}`;
        productList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

// Function to add a new product
function addProduct() {
  const productName = document.getElementById('productName').value;
  const sellingPrice = document.getElementById('sellingPrice').value;

  // Prepare the data to be posted
  const newProduct = {
    title: productName,
    body: sellingPrice,
    userId: 1 // A dummy user ID
  };

  // Post the data to the API
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
  .then(response => response.json())
  .then(() => {
    // Clear the input fields after successful addition
    document.getElementById('productName').value = '';
    document.getElementById('sellingPrice').value = '';

    // Fetch and display the recently added products
    fetchProducts();
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });
}

// Add a click event listener to the "Add" button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addProduct);

// Fetch and display the recently added products when the page loads
fetchProducts();
