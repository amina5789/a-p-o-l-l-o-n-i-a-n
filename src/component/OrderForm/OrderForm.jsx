import { useState, useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder, saveUserData } from "../../redux/orderSlice";
import { clearCart } from "../../redux/cartSlice";
import style from "./OrderFrom.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../routes/routesPath";

export function OrderFrom() {
    const navigit =useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const userData = useSelector((state) => state.order.userData);
  const status = useSelector((state) => state.order.status);

  const [formData, setFormData] = useState({
    email: userData.email || "",
    phone: userData.phone || "",
    address: userData.address || "",
    city: userData.city || "",
    state: userData.state || "",
    zip: userData.zip || "",
    deliveryMethod: "shipment",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...userData,
    }));
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  // navigit(ROUTER_PATHS.OrderFinal, { state: { orders } });

console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Ваша корзина пуста!");
      return;
    }

    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Заполните все поля формы!");
      return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.prace * item.quantity, 0);

    const orderData = {
      user: formData,
      items: cart,
      total: totalPrice.toFixed(2),
    };

    dispatch(saveUserData(formData));
    dispatch(placeOrder(orderData));
    dispatch(clearCart());

    // alert("Заказ оформлен!");
    navigit(ROUTER_PATHS.orderFinal)
  };

  return (
    <section className={style.orderFromContainer}>
      <div className={style.leftContainer}>
        <h1 className={style.information}>My Information</h1>

        <div className={style.bigContainer}>
          <input type="email" name="email" className={style.bigInput} placeholder="Email address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" className={style.bigInput} placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" className={style.bigInput} placeholder="Address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className={style.smallContainer}>
          <input type="text" name="city" className={style.smallInput} placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="text" name="state" className={style.smallInput} placeholder="State" value={formData.state} onChange={handleChange} required />
          <input type="text" name="zip" className={style.smallInput} placeholder="ZIP Code" value={formData.zip} onChange={handleChange} required />
        </div>

        <h3 className={style.orderLike}>How would you like to receive your order?</h3>
        <div className={style.checkboxContainer}>
          <label>
            <input type="checkbox" className={style.checkboxInput} name="deliveryMethod" value="shipment" checked={formData.deliveryMethod === "shipment"} onChange={handleChange} /> By shipment
          </label>
          <label>
            <input type="checkbox" className={style.checkboxInput} name="deliveryMethod" value="inPerson" checked={formData.deliveryMethod === "inPerson"} onChange={handleChange} /> In person
          </label>
        </div>
      </div>

      <div className={style.rightContainer}>
        <h3 className={style.orderTotal}>Order Total</h3>
        <div className={style.containerPrice}>
          <p>Quantity: {cart.reduce((sum, item) => sum + item.quantity, 0) ||1}</p>
          {/* <p>Price: ${cart.map((item)=>item.prace || 0)}</p> */}
        </div>
        <h3 className={style.total}>Total: ${cart.reduce((sum, item) => sum + item.prace * item.quantity, 0).toFixed(2)}</h3>
        <button className={style.btnPurchase} onClick={handleSubmit } disabled={status === "loading"}>
          {status === "loading" ? "Processing..." : "PURCHASE"}
        </button>
      </div>
    </section>
  );
}
