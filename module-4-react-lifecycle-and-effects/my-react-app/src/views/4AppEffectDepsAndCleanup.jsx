import Timer from "../examples/4-1Timer";
import ChatConnection from "../examples/4-2ChatConnection";

function AppEffectDepsAndCleanup() {
  return (
    <div>
      <h2>Unmount Cleanup (Timer Example)</h2>

      <hr />

      <h2>Dependency Change Cleanup (Chat Example)</h2>
    </div>
  );
}

export default AppEffectDepsAndCleanup;
