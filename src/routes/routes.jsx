
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../pages/Main/Main";
import { ROUTER_PATHS } from "./routesPath";
import { Jewelry } from "../pages/Jewelry/Jewelry";
import { AboutUsSection } from "../pages/AboutUsSection/AboutUsSection";
import { ReadMore } from "../pages/ReadMore/ReadMore";
import { Gifts } from "../pages/Gifts/Gifts";
import { NewReleases } from "../component/NewReleases/NewReleases";
import { Locations } from "../pages/Locations/Locations";
import { AutumnColection } from "../pages/AutumnColection/AutumnColection";
import { ModalWindow } from "../component/ModalWindow/ModalWindow";
import { Necklaces } from "../pages/Necklaces/Necklaces";
import { Earrings } from "../pages/Earrings/Earrings";
import { Bracelets } from "../pages/Bracelets/Bracelets";
import { Rings } from "../pages/Rings/Rings";
import { Charms } from "../pages/Charms/Charms";
import { Cart } from "../pages/Cart/Cart";
import { Like } from "../pages/Like/Like";
import { Profile } from "../pages/Profile/Profile";
import { ProductDetail } from "../component/ProductDetail/ProductDetail";
import { Auth } from "../component/Auth/Auth";
import { GiftDetail } from "../component/GiftDetail";
import { OrderFrom } from "../pages/OrderForm";
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
