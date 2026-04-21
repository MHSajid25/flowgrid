import TaskCard from "../components/taskCard";
import useTasks from "../state/useTasks";

export default function Dashboard() {
  const { tasks } = useTasks([
    { title: "Design workflow model", status: "In Progress", owner: "Hamza" },
    { title: "Build reusable components", status: "Completed", owner: "Hamza" },
    { title: "Integrate API data", status: "Planned", owner: "Hamza" }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flowgrid Dashboard</h1>

      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          status={task.status}
          owner={task.owner}
        />
      ))}
    </div>
  );
}
