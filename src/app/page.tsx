"use client";

import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

const SeamlessTransition = () => {
  const firstElementRef = useRef<HTMLButtonElement>(null);
  const secondElementRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isFirst, setIsFirst] = useState(true);
  const [firstElementHeight, setFirstElementHeight] = useState(0);
  const [secondElementHeight, setSecondElementHeight] = useState(0);
  const [firstElementVisible, setFirstElementVisible] = useState(true);
  const [secondElementVisible, setSecondElementVisible] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  const toggleElement = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsFirst(!isFirst);

    if (isFirst) {
      setSecondElementVisible(true);
      timeoutRef.current = setTimeout(() => {
        setFirstElementVisible(false);
      }, 2000);
    } else {
      setFirstElementVisible(true);
      timeoutRef.current = setTimeout(() => {
        setSecondElementVisible(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (firstElementRef.current) {
      setFirstElementHeight(firstElementRef?.current?.offsetHeight);
    }
    if (secondElementRef.current) {
      setSecondElementHeight(secondElementRef?.current?.offsetHeight);
    }

    const timeout = setTimeout(() => setHasRendered(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-1/2 bg-white rounded-lg shadow-lg backdrop-blur-sm p-6">
      <div
        style={{
          height: `${isFirst ? firstElementHeight : secondElementHeight}px`,
        }}
        className={classNames(
          "relative",
          "container",
          hasRendered && "has-rendered"
        )}
      >
        <button
          ref={firstElementRef}
          style={{ visibility: firstElementVisible ? "visible" : "hidden" }}
          onClick={toggleElement}
          className="absolute seamless-transition"
          data-visible={isFirst}
        >
          <h1 className="text-2xl font-semibold">Seamless Transition</h1>
          <p className="text-gray-500 mt-2">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus congue
            auctor; sed eros diam augue. Varius adipiscing amet ex ut rhoncus
            quam. Platea tincidunt ultrices morbi netus sociosqu? Conubia felis
            ornare varius sagittis varius. Maecenas nisl pharetra leo mollis
            sodales morbi.
          </p>
        </button>
        <button
          ref={secondElementRef}
          style={{ visibility: secondElementVisible ? "visible" : "hidden" }}
          onClick={toggleElement}
          className="absolute seamless-transition"
          data-visible={!isFirst}
        >
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
        </button>
      </div>
    </div>
  );
};

export default SeamlessTransition;
