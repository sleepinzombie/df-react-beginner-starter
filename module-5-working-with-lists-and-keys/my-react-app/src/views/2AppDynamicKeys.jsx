import UserList from "../examples/2-1DataObjectId";
import TodoList from "../examples/2-2GeneratedId";

function AppDynamicKeys() {
  return (
    <>
      <h3>Data Object Id</h3>
      <UserList />

      <h3>Generated Id using uuid</h3>
      <TodoList />
    </>
  );
}

export default AppDynamicKeys;
