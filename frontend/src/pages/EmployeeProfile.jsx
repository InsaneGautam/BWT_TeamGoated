import { useParams } from "react-router-dom";
import Timeline from "../components/Timeline";

const EmployeeProfile = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Profile - {id}</h1>
      <Timeline employeeId={id} />
    </div>
  );
};

export default EmployeeProfile;
