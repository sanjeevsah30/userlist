import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";

const Cards = ({toggle}) => {
  const [productsData, setProductData] = useState([]);
  const [deleteCard, setDeleteCard] = useState(null);

  const [page, setPage] = useState(1);
  const arr = [1, 2, 3];
  useEffect(() => {
    const fetchPoduct = async () => {
      try {
        let { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(data);
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPoduct();
  }, []);

  const handlepage = (i) => {
    setPage(i);
  };

  console.log("deleteCard", productsData.length);

  const deleteCardfun = (id) => {
    setProductData(productsData?.filter((item) => item.id !== id));
  };

  console.log(productsData.length);
  return (
    <>
      {!productsData?.length ? (
        <div className='loading'>loading...</div>
      ) : (
        <div className="card-pagination">
          <div className={toggle ?"all-cards":"all-cards1"}>
            {productsData?.slice(page * 6 - 6, page * 6).map((item, index) => (
              <Card
                productDetail={item}
                key={productsData.id}
                setDeleteCard={setDeleteCard}
                deleteCard={deleteCard}
                deleteCardfun={deleteCardfun}
                toggle={toggle}
              />
            ))}
          </div>
          <div className='pagination'>
           
            {productsData.length > 0 && (
              <div>
                {[...Array(Math.floor(productsData.length / 10))].map(
                  (item, index) => (
                    <button onClick={() => handlepage(index + 1)} key={index}>
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            )}
            <span style={{color:"grey",cursor:"pointer"}}
              onClick={() => {
                if (page < 10) setPage(page + 1);
              }}
            >
              {" "}
              {">>"}{" "}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
