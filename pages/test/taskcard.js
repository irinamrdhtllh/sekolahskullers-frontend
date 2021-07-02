import TaskCard from '../../components/TaskCard.js';

export default function TaskCardTest() {
  const task_name = "Ekstrakuriskullers Angkatan #1";
  const max_exp = "100";
  const exp = "90";
  const deadline = "19 Juli 2021";
  const href = "/#";

  return (
    <>
      <TaskCard
        task_name={task_name}
        max_exp={max_exp}
        exp={exp}
        deadline={deadline}
        href={href}
      />
      <TaskCard
        task_name={task_name}
        max_exp={max_exp}
        exp={exp}
        deadline={deadline}
        href={href}
      />
    </>
  );
}
