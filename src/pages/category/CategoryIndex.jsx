import { useSession } from "../../contexts/AuthProvider";
import { useHistory } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable";

export default function CategoryIndex() {
  const { user } = useSession();

  const history = useHistory();

  if (Boolean(user)) {
    if (!user?.roles.includes("admin")) history.replace("/");
  }

  return (
    <>
      <h1>Categories</h1>

      <CategoryTable />
    </>
  );
}
