"use client";
import { useState } from "react";
import { Icon } from "@components/global/icon.component";
import ProductTypeChoice from "./product-type-choice.component";
// import CustomInput from "./custom-input.component";
// import CustomSelect from "./custom-select.component";
// import CustomTextarea from "./custom-textarea.component";

export default function ProductModal() {
  const [productType, setProductType] = useState("");

  const updateProductType = (type: string) => {
    setProductType(type);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40">
      <div className="fixed right-0 top-0 bottom-0 w-[29%] bg-white rounded shadow-md">
        {/** header */}
        <div className="fixed left-[71%] right-0 h-14 px-[14px] py-5 flex items-center border-b">
          <span className="flex-1 font-bold">
            Créez votre produit ou service
          </span>
          <span className="cursor-pointer">
            <Icon name="close" width={14} height={14} />
          </span>
        </div>

        {/** content */}
        <div className="absolute top-14 left-0 right-0 text-sm">
          <>
            <ProductTypeChoice
              title="Stock"
              description="Produits que vous achetez et/ou vendez et pour lesquels vous effectuez un suivi de quantité."
              iconName="stock"
              productTypeSelected={productType}
              handleProductTypeChange={updateProductType}
            />
            <ProductTypeChoice
              title="Sans suivi de stock"
              description="Produits que vous achetez et/ou vendez, mais pour lesquels vous n'avez pas besoin (ou la possibilité) d'effectuer un suivi de quantité, par exemple, les écrous et boulons utilisés dans une installation."
              iconName="sans-stock"
              productTypeSelected={productType}
              handleProductTypeChange={updateProductType}
            />
            <ProductTypeChoice
              title="Service"
              description="Services que vous fournissez à vos clients, par exemple, l'aménagement paysager ou la préparation des déclarations de taxe."
              iconName="service"
              productTypeSelected={productType}
              handleProductTypeChange={updateProductType}
            />
          </>

          {/** Interface d'edition */}
          <></>
        </div>
      </div>
    </div>
  );
}
