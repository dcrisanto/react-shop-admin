import Image from 'next/image';
import buttonAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  return (
    <div>
      <Image src={product.images[0]} alt={product.title} width={250} height={250} />
      <div>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <Image src={buttonAddToCart} alt="icon-add-cart" />
      </div>
    </div>
  );
};

export default ProductItem;
