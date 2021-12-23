import { Table } from "react-bootstrap";
import { CATEGORY_DATA as data } from "../data/mock-data";

export default function CategoryTable() {
  return (
    <div className="shadowBox">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((catItem) => {
            return (
              <tr key={catItem.cat_id}>
                <td>{catItem.id}</td>
                <td>{catItem.cat_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
