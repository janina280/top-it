import React, { useState } from "react";
import { 
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
 } from "@table-library/react-table-library/table";

function ProductTable(data) {
  //ajust this to our needs
  const [filters, setFilters] = React.useState(['SETUP', 'LEARN']);

  const handleFilter = (filter) => {
    filters.includes(filter)
      ? setFilters(filters.filter((value) => value !== filter))
      : setFilters(filters.concat(filter));
  };

  const dataTable = { nodes: data.filter(
    (item) =>
      (filters.includes('SETUP') && item.type === 'SETUP') ||
      (filters.includes('LEARN') && item.type === 'LEARN')
  ),};

  return (
    <>
    <div>
        <label htmlFor="setup">
          Include SETUP:
          <input
            id="setup"
            type="checkbox"
            checked={filters.includes('SETUP')}
            onChange={() => handleFilter('SETUP')}
          />
        </label>
      </div>

      <div>
        <label htmlFor="learn">
          Include LEARN:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes('LEARN')}
            onChange={() => handleFilter('LEARN')}
          />
        </label>
      </div>
      <Table data={dataTable}>{(tableList) => (
        <Header>
        <HeaderRow>
          <HeaderCell>Task</HeaderCell>
          <HeaderCell>Deadline</HeaderCell>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Complete</HeaderCell>
        </HeaderRow>
      </Header>

<Body>
{tableList.map((item) => (
  <Row key={item.id} item={item}>
    <Cell>{item.name}</Cell>
    <Cell>
      {item.deadline.toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }
      )}
    </Cell>
    <Cell>{item.type}</Cell>
    <Cell>{item.isComplete.toString()}</Cell>
  </Row>
))}
</Body>
      )}</Table>
    </>
);
}

export default ProductTable;
