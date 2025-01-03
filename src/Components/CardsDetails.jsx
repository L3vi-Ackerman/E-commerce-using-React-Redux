import React from "react";
import Table from "react-bootstrap/Table";
const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details</h2>
        <section className="container mt-3">
          <div className="itemsdetails d-flex">
            <div className="items_img">
              <img src="/assets/Shrimp_Tempura.png" alt="" />
            </div>
            <div className="details">
              <div className="details">
                <Table>
                  <tr>
                    <td>
                      <p>
                        {" "}
                        <strong>Restaurant</strong> : random
                      </p>
                      <p>
                        {" "}
                        <strong>Price</strong> : Rs. random
                      </p>
                      <p>
                        {" "}
                        <strong>Dishes</strong> : random
                      </p>
                      <p>
                        {" "}
                        <strong>Total</strong> :Rs. random
                      </p>
                      {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div> */}
                    </td>
                    <td>
                      <p>
                        <strong>Rating: </strong>

                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          3.5 ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review: </strong>

                        <span>1175+ order placed from here recently</span>
                      </p>
                      <p>
                        <strong>Rating: </strong>

                        <span>
                          <i className="fas fa-trash" style={{color:'red',fontSize:20,cursor:'pointer'}}></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
