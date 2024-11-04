import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Mejores productos" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Base"
          price="3.000"
          color="Blanco y negro"
          badge={true}
          des
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Mochila"
          price="18.000"
          color="Gris"
          badge={false}
          des
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Materiales"
          price="25.000"
          color="Varios"
          badge={true}
          des
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Bolso"
          price="22.000"
          color="Negro"
          badge={false}
          des
        />
      </div>
    </div>
  );
};

export default BestSellers;
