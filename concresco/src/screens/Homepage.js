import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCakes } from "../actions/cakeActions";
import Cakes from "../components/Cakes";

export default function Homepage() {
  const dispatch = useDispatch();

  const cakestate = useSelector((state) => state.getAllCakesReducer);

  const { cakes, error, loading } = cakestate;

  useEffect(() => {
    dispatch(getAllCakes());
  }, []);

  return (
    <div>
      <div className="row">
        <div style={{ marginTop: "150px" }}></div>

        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error!!!</h1>
        ) : (
          cakes.map((cake) => {
            return (
              <div className="col-md-5  justify-content-center" key={cake._id}>
                <div>
                  <Cakes cake={cake} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
