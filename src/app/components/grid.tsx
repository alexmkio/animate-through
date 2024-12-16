"use client";

import React, { useState } from "react";

type FadeBlockProps = {
  show: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
const FadeBlock = ({ show, ...props }: FadeBlockProps) => {
  return (
    <button
      className={` overflow-hidden col-span-full row-span-full transition-all duration-1000 ease-in-out ${
        show ? "opacity-100 h-auto" : "opacity-0 h-0"
      }`}
      {...props}
    />
  );
};

const Grid = () => {
  const [isFirst, setIsFirst] = useState(true);

  const toggleElement = () => {
    setIsFirst(!isFirst);
  };

  return (
    <div className="w-1/2 grid grid-cols-1 grid-rows-1 items-start bg-white rounded-lg shadow-lg backdrop-blur-sm p-6 grid-container">
      <FadeBlock onClick={toggleElement} show={isFirst}>
        <div className="bg-blue-300 row-start-1 col-start-1">
          <h1 className="text-2xl font-semibold">Seamless Transition</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus congue
            auctor; sed eros diam augue. Varius adipiscing amet ex ut rhoncus
            quam. Platea tincidunt ultrices morbi netus sociosqu? Conubia felis
            ornare varius sagittis varius. Maecenas nisl pharetra leo mollis
            sodales morbi.
          </p>
        </div>
      </FadeBlock>
      <FadeBlock onClick={toggleElement} show={!isFirst}>
        <div className="bg-red-300 row-start-1 col-start-1">
          <h1 className="text-2xl font-semibold text-blue-700">
            Transition Seamless
          </h1>
          <p className="text-blue-600 mt-2">
            Imperdiet ultrices malesuada quis tincidunt duis erat interdum.
            Tempor placerat semper lectus eu; ac tellus imperdiet neque. Tempus
            felis ultrices tempor sagittis nascetur curae aptent. Afacilisis et
            eros non rutrum augue? Volutpat metus neque libero bibendum neque
            ultricies scelerisque. Efficitur tellus odio eros donec diam platea.
            Efficitur himenaeos odio id ridiculus penatibus placerat integer
            donec.
          </p>
          <p className="text-blue-600 mt-2">
            Consequat semper praesent massa parturient bibendum gravida litora.
            Dui cras nisl mauris volutpat bibendum faucibus. Facilisi id libero
            sodales curabitur amet aliquam. Porta maximus imperdiet non
            consectetur odio tortor. Id faucibus parturient erat fermentum
            integer; interdum habitant est at. Dui duis dignissim class
            adipiscing lorem. Neque nunc imperdiet nisl nec fermentum vivamus
            non elementum. Feugiat maecenas ornare aptent quis commodo quis ut.
            Neque porttitor amet montes facilisi cras duis lacinia scelerisque.
            Condimentum posuere massa libero mollis convallis vehicula.
          </p>
        </div>
      </FadeBlock>
    </div>
  );
};

export default Grid;
