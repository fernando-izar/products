import useListProducts from "../../hooks/useListProducts";

export const Products = () => {
  const { data } = useListProducts("");
  console.log(data);
  return (
    <div>
      <h1>Products fka;sdfjasd;kfjasd;fkja</h1>
    </div>
  );
};
