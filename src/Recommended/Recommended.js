import "./Recommended.css";
import Button from "../Components/Button";

const BRANDS = [
  {
    id: 1,
    value: "",
    title: "All Products",
  },
  {
    id: 2,
    value: "Nike",
    title: "Nike",
  },
  {
    id: 3,
    value: "Adidas",
    title: "Adidas",
  },
  {
    id: 4,
    value: "Puma",
    title: "Puma",
  },
  {
    id: 5,
    value: "Vans",
    title: "Vans",
  },
];

function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {/* <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" /> */}

          {BRANDS.map((item, index) => (
            <Button
              key={index}
              onClickHandler={handleClick}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Recommended;
