import { Table } from "react-bootstrap";
import { CATEGORY_DATA as data } from "../../data/mock-data";
import { useSession } from "../../contexts/AuthProvider";
import { useHistory } from "react-router-dom";

export default function CategoryIndex() {
  const { user } = useSession();

  const history = useHistory();

  if (Boolean(user)) {
    if (!user?.roles.includes("admin")) history.replace("/");
  }

  return (
    <>
      <h1>Categories</h1>

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
    </>
  );
}
