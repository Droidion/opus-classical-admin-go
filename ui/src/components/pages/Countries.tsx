import { Table } from "react-daisyui";

const data = [
  {
    id: 1,
    name: "France",
  },
  {
    id: 2,
    name: "Germany",
  },
  {
    id: 3,
    name: "England",
  },
];

export default function Countries() {
  return (
    <>
      <h1>Countries</h1>
      <Table className="not-prose">
        <Table.Head>
          <span>Id</span>
          <span>Name</span>
        </Table.Head>

        <Table.Body>
          {data.map((el) => {
            return (
              <Table.Row key={el.id}>
                <span>{el.id}</span>
                <span>{el.name}</span>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
