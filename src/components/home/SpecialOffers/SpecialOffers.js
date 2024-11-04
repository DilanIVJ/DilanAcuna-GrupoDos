import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="ofertas" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Gorra"
          price="35.000"
          color="Blanco y negro"
          badge={true}
          des
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tabla"
          price="18.000"
          color="Gris"
          badge={true}
          des
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Audifonos"
          price="25.000"
          color="Varios"
          badge={true}
          des
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Lentes"
          price="22.000"
          color="Negro"
          badge={true}
          des
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
