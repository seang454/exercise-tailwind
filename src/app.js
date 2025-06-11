document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
    {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
        {
      title: "Apple Watch Series 7 GPS",
      description: "Aluminium Case, Starlight Sport",
      price: "$599",
      rating: 4,
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
      link: "#"
    },
    // You can add more product objects here
  ];

  const container = document.getElementById("product-list");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className =
      "w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700";

    card.innerHTML = `
      <a href="${product.link}">
        <img class="p-8 rounded-t-lg" src="${product.image}" alt="${product.title}" />
      </a>
      <div class="px-5 pb-5">
        <a href="${product.link}">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title} - ${product.description}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            ${generateStars(product.rating)}
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">${product.rating}.0</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <button class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center">+ Add to cart</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `
        <svg class="w-4 h-4 ${i <= rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}"
             fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734
                   -2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l
                   -5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656
                   3.563-.863 5.031a1.532 1.532 0 0 0 2.226
                   1.616L11 17.033l4.518 2.375a1.534 1.534 0
                   0 0 2.226-1.617l-.863-5.03L20.537
                   9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
    }
    return stars;
  }
});
