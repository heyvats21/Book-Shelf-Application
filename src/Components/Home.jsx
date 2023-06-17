import { useState } from "react";
import { categoriesData } from "../db/categories";
import CardComponent from "./CardComponent";

export default function Home() {
  const [bookData, setBookData] = useState(categoriesData);
  console.log(bookData);

  return (
    <div>
      <div>
        <h2>Currently Reading</h2>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "80px" }}>
            {
                bookData.filter((item)=>item.shelf==="Currently Reading").map((elem)=>(
                    <CardComponent category={elem} />
                ))
            }
          {/* {bookData.map((item) => (
            <CardComponent category={item} />
          ))} */}
        </div>
        <hr />
        <div>
        <h2>Want To Read</h2> 
        
        </div>
        <hr />
        <div>
            <h2>Read</h2>
        </div>
        <hr />
      </div>
    </div>
  );
}
