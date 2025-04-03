
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import { ROUTER_PATHS } from "./routesPath";
import { Jewelry } from "../component/Jewelry/Jewelry";
import { AboutUsSection } from "../component/AboutUsSection/AboutUsSection";
import { ReadMore } from "../component/ReadMore/ReadMore";
import { Gifts } from "../component/Gifts/Gifts";
import { NewReleases } from "../component/NewReleases/NewReleases";
import { Locations } from "../component/Locations/Locations";
import { AutumnColection } from "../component/AutumnColection/AutumnColection";
import { ModalWindow } from "../component/ModalWindow/ModalWindow";
import { Necklaces } from "../Necklaces/Necklaces";
import { Earrings } from "../component/Earrings/Earrings";
import { Bracelets } from "../component/Bracelets/Bracelets";
import { Rings } from "../component/Rings/Rings";
import { Charms } from "../component/Charms/Charms";
import { Cart } from "../component/Cart/Cart";
import { Like } from "../component/Like/Like";
import { Profile } from "../component/Profile/Profile";
import { ProductDetail } from "../component/ProductDetail/ProductDetail";
import { Auth } from "../component/Auth/Auth";
import { GiftDetail } from "../component/GiftDetail";
import { OrderFrom } from "../component/OrderForm";
import { OrderFinal } from "../component/Auth/companent/OrderFinal/OrderFinal";
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.jewelry,
        element: < Jewelry/>,
      },
      {
        path: ROUTER_PATHS.AboutUsSection,
        element: < AboutUsSection/>,
      },
      {
        path: ROUTER_PATHS.readMore,
        element: <ReadMore />,
      },
      {
        path: ROUTER_PATHS.gift,
        element: <Gifts/>,
      },
      {
        path: ROUTER_PATHS.newReleases,
        element: <NewReleases />,
      },
      {
        path: ROUTER_PATHS.locations,
        element: <Locations />,
      },
      {
        path: ROUTER_PATHS.autumnColection,
        element: <AutumnColection />,
     },  {
       path: ROUTER_PATHS.modal,
        element: <ModalWindow />,
      }, 
       {
       path: ROUTER_PATHS.Necklaces,
       element: <Necklaces />,
     }, {
        path: ROUTER_PATHS.Earrings,
       element: <Earrings />,
     }, {
     path: ROUTER_PATHS.Bracelets,
       element: <Bracelets />,
     }, 
     {
       path: ROUTER_PATHS.Rings,
       element: <Rings />,
     },{
       path: ROUTER_PATHS.Charms,
       element: <Charms />,
     },
      {
        path: ROUTER_PATHS.Cart,
        element: <Cart />,
      },{
        path: ROUTER_PATHS.Like,
        element: <Like />,
      },{
        path: ROUTER_PATHS.Profile,
        element: <Profile />,
      },{
        path: ROUTER_PATHS.product,
        element: <ProductDetail/>,
      },{
        path: ROUTER_PATHS.Auth,
        element: <Auth/>,
      },{
        path: ROUTER_PATHS.giftProduct,
        element: <GiftDetail />,
      },{
        path: ROUTER_PATHS.OrderFrom,
        element: <OrderFrom />,
      },{
        path: ROUTER_PATHS.orderFinal,
        element: <OrderFinal />,
      },
    ],
  },
])
