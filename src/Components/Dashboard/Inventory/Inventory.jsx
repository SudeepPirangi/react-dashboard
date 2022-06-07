import React from "react";
import { Table, Checkbox } from "rsuite";

import CheckBoxCell from "./CheckBoxCell";
import CustomerCell from "./CustomerCell";
import ExpandCell from "./ExpandCell";
import ExpandedRow from "./ExpandedRow";

const { Column, Cell, HeaderCell } = Table;

const rowKey = "id";

function Inventory() {
  const data = fakeData.filter((v, i) => i < 5);
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([1]);

  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [checkedKeys, setCheckedKeys] = React.useState([]);
  let checked = false;
  let indeterminate = false;

  // sorting helpers
  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  // checkbox helpers
  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (value, checked) => {
    const keys = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value, checked) => {
    const keys = checked ? [...checkedKeys, value] : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
  };

  // expand helper
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
    <div style={{ marginBottom: "50px" }}>
      <Table
        height={550}
        data={getData()}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        onRowClick={(data) => {
          console.log(data);
        }}
        renderRowExpanded={ExpandedRow}
        rowExpandedHeight={250}
      >
        <Column width={50} align="center" fixed>
          <HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: "40px" }}>
              <Checkbox inline checked={checked} indeterminate={indeterminate} onChange={handleCheckAll} />
            </div>
          </HeaderCell>
          <CheckBoxCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
        </Column>

        <Column width={300} fixed>
          <HeaderCell>Customer</HeaderCell>
          <CustomerCell dataKey="id" />
        </Column>

        <Column width={130} sortable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>Company</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

        <Column width={50} align="center" fixed>
          <HeaderCell>&nbsp;</HeaderCell>
          <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
        </Column>
      </Table>
    </div>
  );
}

const fakeData = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
    city: "East Dejuan",
    email: "Enrico_Beer@yahoo.com",
    firstName: "Margret",
    lastName: "Heller",
    street: "Gunner Drive",
    zipCode: "17423-9317",
    date: "2017-03-13T21:09:47.253Z",
    bs: "wireless morph synergies",
    catchPhrase: "Profit-focused radical help-desk",
    companyName: "Corwin, Maggio and Wintheiser",
    words: "temporibus possimus neque",
    sentence: "Eum amet ea non natus qui assumenda illo officia qui.",
    stars: 9920,
    followers: 570,
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=J",
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
    avatar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
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
    avatar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
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
    avatar: "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=S",
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
