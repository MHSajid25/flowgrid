import TaskCard from "../components/taskCard";

export default function Dashboard() {
  const tasks = [
    { title: "Design workflow state model", status: "In Progress", owner: "Hamza" },
    { title: "Build reusable task cards", status: "Completed", owner: "Hamza" },
    { title: "Connect dashboard to API", status: "Planned", owner: "Hamza" }
  ];

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
