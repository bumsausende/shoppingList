import { useEffect, useState } from "react";

export const ShoppingItems = () => {
  const [shoppingBackLog, setShoppingBackLog] = useState([]);

  useEffect(() => {
    const url = "https://fetch-me.vercel.app/shopping-list.json";
    const fetchList = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setShoppingBackLog(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchList();
  }, []);
  //above: dont forget the array
  return (
    <section className="backlog">
      {shoppingBackLog.map(({ name, id }) => (
        <span className="shoppingItem--id" key={id}>
          {" "}
          {name}
        </span>
      ))}
    </section>
  );
  console.log(ShoppingItems);
};
