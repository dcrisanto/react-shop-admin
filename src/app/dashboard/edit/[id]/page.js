'use client';
import FormProducts from "@components/FormProducts";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import endPoints from "@services/api";
import useAlert from "@hooks/useAlert";
import Alert from "@common/Alert";

const Edit = ({ params }) => {
  const id = params.id;
  const [ product, setProduct ] = useState();
  const { alert, toogleAlert, setAlert } = useAlert();

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

  return (
    <>
      <Alert alert={alert} handleClose={toogleAlert} />
      <FormProducts product={product} setAlert={setAlert} />
    </>
  )
};

export default Edit;
