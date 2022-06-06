import React from "react";
import { FlexboxGrid } from "rsuite";
import { FaShoppingBasket, FaTruck, FaClipboardCheck, FaWindowClose } from "react-icons/fa";

import Tile from "../CommonUI/Tile";

function OrderTiles() {
  const orders = [
    {
      name: "Open orders",
      icon: <FaShoppingBasket />,
      data: "239",
    },
    {
      name: "Orders in transit",
      icon: <FaTruck />,
      data: "126",
    },
    {
      name: "Fulfilled orders",
      icon: <FaClipboardCheck />,
      data: "1,254",
    },
    {
      name: "Cancelled orders",
      icon: <FaWindowClose />,
      data: "35",
    },
  ];
  return (
    <FlexboxGrid justify="space-between" style={{ marginTop: "10px" }}>
      {orders.map((order, index) => (
        <Tile key={index} name={order.name} icon={order.icon} data={order.data} />
      ))}
    </FlexboxGrid>
  );
}

export default OrderTiles;
