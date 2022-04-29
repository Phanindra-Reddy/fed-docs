import { useState, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



function CategoryPagination(props) {
  const { categories, handleCategory } = props;

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    
    <div className="flex items-center justify-center text-center px-5">
      {scrollX !== 0 && (
        <ArrowBackIosIcon onClick={() => slide(-50)} className="cursor-pointer dark:text-white" />
      )}
      <ul ref={scrl} onScroll={scrollCheck} className="flex items-center list-none overflow-x-scroll">
        {categories.map((category, i) => (
          <Tag key={i} data={category} handleCategory={handleCategory}/>
        ))}
      </ul>
      {!scrolEnd && (
        <ArrowForwardIosIcon
          onClick={() => slide(+50)}
          className="cursor-pointer dark:text-white"
        />
      )}
    </div>
  );
}

const Tag = ({data,handleCategory}) => {
    const {id, category, slug} = data
    return (
        <li onClick={()=>handleCategory(slug)}  className="border-none bg-sky-300 rounded-md text-gray-900 p-1 cursor-pointer hover:bg-sky-600 hover:text-white mr-2">
            {category}
        </li>
    );
};

export default CategoryPagination;
