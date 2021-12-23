import { useSession } from "../contexts/AuthProvider";

export default function UserComponent() {
  const { user } = useSession();

  return (
    <div className="shadowBox p-5">
      <h1>User Data</h1>
      <p>Naam: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>
        Roles:
        <ul>
          {user?.roles.map((rol) => {
            return (
              <>
                <li>{rol}</li>
              </>
            );
          })}
        </ul>
      </p>
    </div>
  );
}
