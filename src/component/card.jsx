import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Card = ({
  productDetail,
  setDeleteCard,
  deleteCardfun,
  deleteCard,
  toggle,
}) => {
  const date = new Date();

  return (
    <>
      {toggle ? (
        <>
          {" "}
          <div className='box' onClick={() => setDeleteCard(productDetail?.id)}>
            <div className='card'>
              <FaRegUserCircle className='user-icon' />
              <div className='card-detail'>
                <p className='card-title'>{productDetail?.title}</p>
                <p className='card-body'> {productDetail?.body}</p>
                <p className='date'>
                  Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
                </p>
              </div>
            </div>
            <RxCross1
              className='cross-icon'
              onClick={() => {
                console.log("123");
                deleteCardfun(deleteCard);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className='box1'
            onClick={() => setDeleteCard(productDetail?.id)}
          >
            <div className='card1'>
              <div className='card-detail1'>
                <p className='card-title1'>{productDetail?.title}</p>
                <p className='card-body1'> {productDetail?.body}</p>
                <p className='date1'>
                  Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
                </p>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjk8NgLbE_0xJrBzQHxM1vYbwF69NsuUZlqm91byjxDH6RYIrfhIyAMHSgytBrI5ubog&usqp=CAU'
                  className='user-icon1'
                />
              </div>
              <RxCross1
                className='cross-icon1'
                onClick={() => {
                  console.log("123");
                  deleteCardfun(deleteCard);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
