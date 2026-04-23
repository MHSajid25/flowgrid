import TaskCard from "../components/taskCard";
import useTasks from "../state/useTasks";

export default function Dashboard() {
  const { tasks } = useTasks([
    { id: 1, title: "Design workflow model", status: "In Progress", owner: "Hamza" },
    { id: 2, title: "Build reusable components", status: "Completed", owner: "Hamza" },
    { id: 3, title: "Integrate API data", status: "Planned", owner: "Hamza" }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flowgrid Dashboard</h1>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
          owner={task.owner}
        />
      ))}
    </div>
  );
}
