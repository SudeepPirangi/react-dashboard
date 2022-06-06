import React from "react";
import { Table } from "rsuite";
import { FaRegPlusSquare, FaPlus, FaMinus } from "react-icons/fa";

import styles from "./Inventory.module.css";

const { Column, Cell, HeaderCell } = Table;

const rowKey = "id";
const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props}>
    <FaRegPlusSquare
      size="xs"
      appearance="subtle"
      onClick={() => {
        onChange(rowData);
      }}
      icon={expandedRowKeys.some((key) => key === rowData[rowKey]) ? <FaPlus /> : <FaMinus />}
    />
  </Cell>
);

const renderRowExpanded = (rowData) => {
  return (
    <div>
      <div
        style={{
          width: 60,
          height: 60,
          float: "left",
          marginRight: 10,
          background: "#eee",
        }}
      >
        <img src={rowData.avartar} alt="avatar" style={{ width: 60 }} />
      </div>
      <p>{rowData.email}</p>
      <p>{rowData.date}</p>
    </div>
  );
};

function Inventory() {
  const data = fakeData.filter((v, i) => i < 5);
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData, dataKey) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach((key) => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }

    setExpandedRowKeys(nextExpandedRowKeys);
  };
  return (
    <div className={styles.something}>
      <Table
        height={300}
        data={data}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        onRowClick={(data) => {
          console.log(data);
        }}
        renderRowExpanded={renderRowExpanded}
      >
        <Column width={70} align="center">
          <HeaderCell>#</HeaderCell>
          <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
        </Column>

        <Column width={130}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200}>
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>
      </Table>
    </div>
  );
}

const fakeData = [
  {
    id: 1,
    avartar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
    city: "New Amieshire",
    email: "Leora13@yahoo.com",
    firstName: "Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe",
    lastName: "Schuppe",
    street: "Ratke Port",
    zipCode: "17026-3154",
    date: "2016-09-23T07:57:40.195Z",
    bs: "global drive functionalities",
    catchPhrase: "Intuitive impactful software",
    companyName: "Lebsack - Nicolas",
    words: "saepe et omnis",
    sentence: "Quos aut sunt id nihil qui.",
    stars: 820,
    followers: 70,
  },
  {
    id: 2,
    avartar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=J",
    city: "New Gust",
    email: "Mose_Gerhold51@yahoo.com",
    firstName: "Janis",
    lastName: "Vandervort",
    street: "Dickinson Keys",
    zipCode: "43767",
    date: "2017-03-06T09:59:12.551Z",
    bs: "e-business maximize bandwidth",
    catchPhrase: "De-engineered discrete secured line",
    companyName: "Glover - Hermiston",
    words: "deleniti dolor nihil",
    sentence: "Illo quidem libero corporis laborum.",
    stars: 1200,
    followers: 170,
  },
  {
    id: 3,
    avartar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
    city: "Lefflerstad",
    email: "Frieda.Sauer61@gmail.com",
    firstName: "Makenzie",
    lastName: "Bode",
    street: "Legros Divide",
    zipCode: "54812",
    date: "2016-12-08T13:44:26.557Z",
    bs: "plug-and-play e-enable content",
    catchPhrase: "Ergonomic 6th generation challenge",
    companyName: "Williamson - Kassulke",
    words: "quidem earum magnam",
    sentence: "Nam qui perferendis ut rem vitae saepe.",
    stars: 610,
    followers: 170,
  },
  {
    id: 4,
    avartar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
    city: "East Catalina",
    email: "Eloisa.OHara@hotmail.com",
    firstName: "Ciara",
    lastName: "Towne",
    street: "Schimmel Ramp",
    zipCode: "76315-2246",
    date: "2016-07-19T12:54:30.994Z",
    bs: "extensible innovate e-business",
    catchPhrase: "Upgradable local model",
    companyName: "Hilpert, Eichmann and Brown",
    words: "exercitationem rerum sit",
    sentence: "Qui rerum ipsa atque qui.",
    stars: 5322,
    followers: 170,
  },
  {
    id: 5,
    avartar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=S",
    city: "Ritchieborough",
    email: "Brisa46@hotmail.com",
    firstName: "Suzanne",
    lastName: "Wolff",
    street: "Lemuel Radial",
    zipCode: "88870-3897",
    date: "2017-02-23T17:11:53.875Z",
    bs: "back-end orchestrate networks",
    catchPhrase: "Exclusive human-resource knowledge base",
    companyName: "Mayer - Considine",
    words: "voluptatum tempore at",
    sentence: "Enim quia deleniti molestiae aut.",
    stars: 852,
    followers: 770,
  },
];

export default Inventory;
