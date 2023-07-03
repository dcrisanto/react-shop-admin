'use client';
import ProductItem from '@components/ProductItem';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

const endPoint = endPoints.products.getProducts(5, 0);

const ProductList = () => {
  const products = useFetch(endPoint);
  return (
    <section>
      <div>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== '' && product.images[0].includes('https')) {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
