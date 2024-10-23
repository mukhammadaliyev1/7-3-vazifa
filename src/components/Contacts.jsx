import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 250)); // 250 tasini yuklash.
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-10 mt-10">
      {data.length > 0 &&
        data.map((value, index) => (
          <div key={index} className="mx-auto">
            <div>
              <LazyLoadImage
                alt={value.title}
                src={value.thumbnailUrl}
                effect="blur" // 
                height={150} 
                width={150} 
              />
              <p className="text-center">{value.title}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Contacts;
