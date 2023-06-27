'use client';
import FormProducts from "@components/FormProducts";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import endPoints from "@services/api";

const Edit = ({ params }) => {
  const id = params.id;
  const [ product, setProduct ] = useState();

  useEffect(() => {
    if(!id) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(params.id));
      setProduct(response.data);
    }

    try {
      getProduct();
    } catch (error) {
      console.log(error.message);
    }
  }, [params.id]);

  console.log(id);
  console.log(product);

  return <FormProducts product={product} />
};

export default Edit;
