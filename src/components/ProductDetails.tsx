// Hook imports
import { useState } from "react";

// Component imports
import ProductButton from "./ProductButton";

// Data imports
import { ARTICLE_GAP } from "../data/constants";
import { ACTIVE_BUTTON } from "../data/constants";
import { imageUrls } from "../data";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "../data/constants";

// Define the type for product keys (categories)
type ProductType = "bouquets" | "saddles" | "memorials";

// Product Details Data in JSX format
const productDetails: Record<ProductType, JSX.Element> = {
  bouquets: (
    <>
      {/* Quotation marks and other symbols need adjusting for Screen Readers */}
      <h3 className="text-2xl font-semibold">Bouquets</h3>
      <ul role="list" className="*:text-sm md:*:text-lg">
        <li>Base is detachable</li>
        <li>
          Vase Height: 6<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Clip-on Stem Height: 3<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Vase Top Diameter: <span aria-hidden="true">~</span>
          <span className="sr-only">approximately</span> 4
          <span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Vast Bottom Diameter: <span aria-hidden="true">~</span>
          <span className="sr-only">approximately</span> 2.4
          <span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Price: $30<span aria-hidden="true">+</span>
          <span className="sr-only"> or more</span>
        </li>
      </ul>
    </>
  ),
  saddles: (
    <>
      <h3 className="text-2xl font-semibold">Saddles</h3>
      <ul role="list" className="*:text-sm md:*:text-lg">
        <li>Uses a Metal Frame</li>
        <li>Polystyrene Base is sealed</li>
        <li>
          Frame Length: 17<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Frame Width: 10.5<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Saddle: <span aria-hidden="true">~</span>
          <span className="sr-only">approximately</span> 20
          <span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>{" "}
          <span aria-hidden="true">x</span>
          <span className="sr-only">by</span> 16
          <span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>{" "}
          <span aria-hidden="true">x</span>
          <span className="sr-only">by</span> 12
          <span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Price: $70<span aria-hidden="true">+</span>
          <span className="sr-only"> or more</span>
        </li>
      </ul>
    </>
  ),
  memorials: (
    <>
      <h3 className="text-2xl font-semibold">Memorials</h3>
      <ul role="list" className="*:text-sm md:*:text-lg">
        <li>Polystyrene Base is sealed</li>
        <li>Easel NOT included</li>
        <li>
          Height: 17<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Length: 10<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Width: 2<span aria-hidden="true">"</span>
          <span className="sr-only"> inches</span>
        </li>
        <li>
          Price: $30<span aria-hidden="true">+</span>
          <span className="sr-only"> or more</span>
        </li>
      </ul>
    </>
  ),
};

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductType>("bouquets");
  const [activeButton, setActiveButton] = useState<ProductType>("bouquets");

  const handleProductChange = (product: ProductType) => {
    setSelectedProduct(product);
    setActiveButton(product);
  };

  return (
    <>
      {/* Grid */}
      <div
        id="product-details"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-items-center"
      >
        {/* Text & Buttons */}
        <div className="grid text-center">
          {/* Product Info */}
          <div className={`grid place-content-center gap-${ARTICLE_GAP}`}>
            <div
              id="product-details-info"
              className="grid place-content-center"
            >
              {/* Dynamically render product details */}
              {productDetails[selectedProduct]}
            </div>
            {/* Buttons */}
            <div
              id="product-details-btns"
              className="flex border-2 border-black rounded-s-xl rounded-e-xl divide-x-2 divide-black max-w-min dark:divide-white dark:border-white"
            >
              <ProductButton
                styles={`rounded-s-xl ${activeButton === "bouquets" ? ACTIVE_BUTTON.join(" ") : ""}`}
                buttonText="Bouquets"
                onClick={() => handleProductChange("bouquets")}
                isSelected={activeButton === "bouquets" ? true : false}
              />
              <ProductButton
                styles={
                  activeButton === "saddles" ? ACTIVE_BUTTON.join(" ") : ""
                }
                buttonText="Saddles"
                onClick={() => handleProductChange("saddles")}
                isSelected={activeButton === "saddles" ? true : false}
              />
              <ProductButton
                styles={`rounded-e-xl ${activeButton === "memorials" ? ACTIVE_BUTTON.join(" ") : ""}`}
                buttonText="Memorials"
                onClick={() => handleProductChange("memorials")}
                isSelected={activeButton === "memorials" ? true : false}
              />
            </div>
          </div>
        </div>
        {/* Images */}
        <img
          loading="lazy"
          data-value="bouquets"
          className={selectedProduct === "bouquets" ? "block" : "hidden"}
          src={imageUrls[2]}
          alt="Vase and Blue Silk Flower Bouquet"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
        />
        <img
          loading="lazy"
          data-value="saddles"
          className={selectedProduct === "saddles" ? "block" : "hidden"}
          src={imageUrls[3]}
          alt="Red Silk Flower Saddle for Headstones"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
        />
        <img
          loading="lazy"
          data-value="memorials"
          className={selectedProduct === "memorials" ? "block" : "hidden"}
          src={imageUrls[4]}
          alt="Red Silk Flower Arrangement shaped like a heart"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
        />
      </div>
    </>
  );
}
