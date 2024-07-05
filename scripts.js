const productsPerPage = 9;
let currentPageAll = 1;
let currentPageAvailable = 1;
let currentPageNotAvailable = 1;
let totalProductsAll = 0;
let totalProductsAvailable = 0;
let totalProductsNotAvailable = 0;

document.addEventListener('DOMContentLoaded', function () {
    fetchProducts('all');
});

function fetchProducts(filter = 'all') {
    axios.get('https://product-store-api-c40daf4c93ce.herokuapp.com/api/products')
        .then(response => {
            const products = response.data.data;
            const tableBody = document.getElementById('product-table-body');
            tableBody.innerHTML = '';

            let filteredProducts = products;
            let currentPage = currentPageAll;
            let totalProductsVar = totalProductsAll;

            if (filter === 'available') {
                filteredProducts = products.filter(product => product.available);
                currentPage = currentPageAvailable;
                totalProductsVar = totalProductsAvailable;
            } else if (filter === 'notAvailable') {
                filteredProducts = products.filter(product => !product.available);
                currentPage = currentPageNotAvailable;
                totalProductsVar = totalProductsNotAvailable;
            }

            totalProductsVar = filteredProducts.length;
            const start = (currentPage - 1) * productsPerPage;
            const end = start + productsPerPage;
            const paginatedProducts = filteredProducts.slice(start, end);

            paginatedProducts.forEach(product => {
                const row = `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.brand}</td>
                        <td>${product.available ? 'Available' : 'Not Available'}</td>
                        <td>$${product.price.toLocaleString()}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML('beforeend', row);
            });

            if (filter === 'all') {
                totalProductsAll = totalProductsVar;
            } else if (filter === 'available') {
                totalProductsAvailable = totalProductsVar;
            } else if (filter === 'notAvailable') {
                totalProductsNotAvailable = totalProductsVar;
            }

            updateButtonStyles(filter);
            updatePagination(filter);
        })
        .catch(error => console.error('Error fetching products:', error));
}

function filterProducts(filter) {
    if (filter === 'all') {
        currentPageAll = 1;
    } else if (filter === 'available') {
        currentPageAvailable = 1;
    } else if (filter === 'notAvailable') {
        currentPageNotAvailable = 1;
    }
    fetchProducts(filter);
}

function updateButtonStyles(activeFilter) {
    const buttons = {
        all: document.getElementById('all-btn'),
        available: document.getElementById('available-btn'),
        notAvailable: document.getElementById('not-available-btn'),
    };

    Object.keys(buttons).forEach(filter => {
        buttons[filter].classList.remove('active');
    });

    if (activeFilter === 'available') {
        buttons.available.classList.add('active');
    } else if (activeFilter === 'notAvailable') {
        buttons.notAvailable.classList.add('active');
    } else {
        buttons.all.classList.add('active');
    }
}

function showAddProductForm() {
    $('#addProductModal').modal('show');
}

document.getElementById('add-product-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const brand = document.getElementById('product-brand').value;
    const price = document.getElementById('product-price').value;
    const available = document.getElementById('product-availability').value;

    axios.post('https://product-store-api-c40daf4c93ce.herokuapp.com/api/products', {
        name,
        brand,
        price,
        available: available === 'true'
    })
        .then(response => {
            $('#addProductModal').modal('hide');
            const activeFilter = document.querySelector('.btn-group .btn.active').id.split('-')[0];
            fetchProducts(activeFilter);
        })
        .catch(error => console.error('Error adding product:', error));
});

function updatePagination(filter) {
    let totalPages;
    let currentPage;
    if (filter === 'all') {
        totalPages = Math.ceil(totalProductsAll / productsPerPage);
        currentPage = currentPageAll;
    } else if (filter === 'available') {
        totalPages = Math.ceil(totalProductsAvailable / productsPerPage);
        currentPage = currentPageAvailable;
    } else if (filter === 'notAvailable') {
        totalPages = Math.ceil(totalProductsNotAvailable / productsPerPage);
        currentPage = currentPageNotAvailable;
    }

    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        pageItem.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i}, '${filter}')">${i}</a>`;
        pagination.appendChild(pageItem);
    }
}

function goToPage(page, filter) {
    if (filter === 'all') {
        currentPageAll = page;
    } else if (filter === 'available') {
        currentPageAvailable = page;
    } else if (filter === 'notAvailable') {
        currentPageNotAvailable = page;
    }
    fetchProducts(filter);
}
