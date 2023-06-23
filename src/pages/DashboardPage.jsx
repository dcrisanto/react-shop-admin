import { Chart } from '@common/Chart';
import useFetch from '@hooks/useFetch';
import usePagination from '@hooks/usePagination';
import endPoints from '@services/api';

const PRODUCT_LIMIT = parseInt(process.env.NEXT_PUBLIC_PRODUCT_LIMIT);
const PAGINATION_NUMBER_ITEMS = parseInt(process.env.NEXT_PUBLIC_PAGINATION_NUMBER_ITEMS);
const PRODUCT_OFFSET_INITIAL = parseInt(process.env.NEXT_PUBLIC_PRODUCT_OFFSET_INITIAL);
const endPoint = endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET_INITIAL);

const DashboardPage = () => {
  const allProducts = useFetch(endPoint);
  const totalProducts = allProducts.length;
  const updatePagination = usePagination(PAGINATION_NUMBER_ITEMS, PRODUCT_OFFSET_INITIAL, totalProducts);
  const products = allProducts.slice(updatePagination.currentOffset, updatePagination.currentOffset + PAGINATION_NUMBER_ITEMS);

  const categories = products?.map((product) => product.category);
  const categoriesName = categories.map((category) => category.name);
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    //mostrar la información de donde la obtengamos ya sea de una api, de un objeto, ect
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoriesName),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
};

export default DashboardPage;
