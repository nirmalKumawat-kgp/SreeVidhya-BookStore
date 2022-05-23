import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function WrapperComponent({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div class="loader-container">
          <img src="image/loader-img.gif" alt="" />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
