import { useNavigate } from 'react-router-dom';
import styl from './OrderFinal.module.scss';
import { ROUTER_PATHS } from '../../../../routes/routesPath';
import { useSelector } from 'react-redux';

export function OrderFinal() {
    const navigate = useNavigate();
    const orderData = useSelector((state) => state.order.orderDetails); // 👈 Теперь берем заказ из Redux

    if (!orderData) {
        return <h2>Loading order details...</h2>;
    }

    return (
        <section className={styl.orderFinalSection}> 
            <div className={styl.container}>
                <h2 className={styl.orderFinal}>Order placed!</h2>
                <div>
                    <p className={styl.copyEmail}>
                        A copy of your receipt has been sent to your email.
                    </p>
                </div>
                <hr className={styl.hrDiv}></hr>

                <div className={styl.containerTotal}>
                    <div className={styl.pAddres}>
                        <h3 className={styl.totalFinal}>Total: ${orderData.total || "N/A"}</h3>
                        {/* <p className={styl.pdata}>Name: {orderData.user?.name || "N/A"}</p> */}
                        <p className={styl.pdata}>Email address: {orderData.user?.email || "N/A"}</p>
                        <p className={styl.pdata}>Phone number: {orderData.user?.phone || "N/A"}</p>
                        <p className={styl.pdata}>
                            Shipping Address: {orderData.user?.address || "N/A"}, 
                            {orderData.user?.city || "N/A"}, 
                            {orderData.user?.state || "N/A"} 
                            {orderData.user?.zip || "N/A"}
                        </p>

                        <button className={styl.btnFinal} onClick={() => navigate(ROUTER_PATHS.jewelry)}>
                            BACK TO SHOPPING
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
