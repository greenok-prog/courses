import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import {
  addToPurchased,
  setErrorAction,
  setMessageAction,
} from "../../store/actions/user";
import { useNavigate } from "react-router-dom";

function PaypalCheckoutButton({ product, cardId }) {
  const [paidFor, setPaidFor] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleAprove = (orderId) => {
    console.log("orderId:", orderId);
    setPaidFor(true);
  };
  if (paidFor) {
    dispatch(setMessageAction("Успешно"));
  }
  console.log(product);
  return (
    <div>
      {product.description && (
        <PayPalButtons
          style={{
            tagline: false,
            color: "black",
          }}
          onClick={(data, actions) => {
            // const hasAlreadyBoughtCourse =
            //   currentUser.user.purchasedCourses.includes(cardId);

            // if (hasAlreadyBoughtCourse) {
            //   dispatch(setErrorAction("Вы уже преобрели данный курс"));
            //   return actions.reject();
            // } else {
            return actions.resolve();
            // }
          }}
          createOrder={(data, actions) => {
            console.log(product.description);
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    value: Number(product.price),
                    currency_code: "USD",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              dispatch(addToPurchased(currentUser.user._id, cardId));
              navigate("/card/" + cardId);
            });
          }}
          onError={(err) => console.log(err)}
        />
      )}
    </div>
  );
}

export default PaypalCheckoutButton;
