const inputValue = document.querySelector("#searchInput");
const featuredCheckBox = document.querySelector("#filterByFeatured");
const selectOption = document.querySelector(".filter-select");
const itemLimit = document.querySelector("#itemsPerPage");
const nextPage = document.querySelector("#nextPage");
const prevPage = document.querySelector("#prevPage");
const currPage = document.querySelector("#currentPage");
let data;
let url = `http://localhost:5173/api/v1/store/search?`;

function fetchAllProducts(){
  const url = `http://localhost:5173/api/v1/store/search?page=1&limit=10&sort=name`;
  fetch(url)
  .then(res => res.json())
  .then(resData => {
    data = resData;
    showProducts();
  })
};

function showProducts() {
  const totalItem = document.querySelector(".noofitems").innerText = data.totalItems;
  let productList = document.getElementById('productList');
  productList.innerHTML = '';
  
  data.product.forEach(item => {
    const li = document.createElement('li');

    const name = document.createElement('div');
    name.classList.add('product-name');
    name.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = 'Price: ' + '₹' + item.price;

    const company = document.createElement('div');
    company.classList.add('product-company');
    company.textContent = 'Company: ' + item.company.charAt(0).toUpperCase() + item.company.slice(1);

    const date = document.createElement('div');
    date.classList.add('product-date');
    date.textContent = 'Date: ' + item.createdAt;

    const rating = document.createElement('div');
    rating.classList.add('product-rating');
    rating.textContent = 'Rating: ' + item.rating;

    const featured = document.createElement('div');
    featured.classList.add('product-featured');
    featured.textContent = item.featured ? 'Featured' : '';

    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(company);
    li.appendChild(date);
    li.appendChild(rating);
    li.appendChild(featured);

    productList.appendChild(li);
  });
};

fetchAllProducts();

featuredCheckBox.addEventListener('change',() => {
    fetchSearchedProduct();
  });

 selectOption.addEventListener('change',() => {
  fetchSearchedProduct();
});

itemLimit.addEventListener('change',() => {
  fetchSearchedProduct();
});
  let currentPage = 1;
  nextPage.addEventListener('click',() => {
    currentPage++;
    url += `page=${currentPage}`;
    currPage.innerText = "Page:" + currentPage;
    fetchSearchedProduct();
  });
  
  prevPage.addEventListener('click',() => {
    if(currentPage != 1){
    currentPage--;
    url += `page=${currentPage}`;
    currPage.innerText = "Page:" + currentPage;
    fetchSearchedProduct();
  }});
  
function fetchSearchedProduct(){
  event.preventDefault();
  if(inputValue.value != ''){
    url += `name=${inputValue.value}&`;
  };
  if(featuredCheckBox.checked){
    url += "featured=true&";
  };
  url += `sort=${selectOption.options[selectOption.selectedIndex].innerText || 'name'}&`;
  url += `limit=${itemLimit.options[itemLimit.selectedIndex].innerText || 10}`;
  fetch(url)
  .then(res => res.json())
  .then(resData => {
    data = resData;
    showProducts();
  })
};