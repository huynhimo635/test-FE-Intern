let products = [];

for (let i = 1; i <= 20; i++) {
  const img = require(`../../assets/img/img-${i}.png`).default;

  products.push(img);
}

export default products;
