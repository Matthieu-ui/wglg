import React, { useEffect, useState } from "react";
import { Globe } from "react-webgl-globe";

function GlobeContainer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/dataarts/webgl-globe/master/globe/population909500.json",
      true
    );
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          setData(data[0][1]);
        }
      }
    };
    xhr.send(null);
  }, []);

  return (
    <div className="App">
      <Globe data={data} width={800} height={480} />
    </div>
  );
}

export { GlobeContainer };
