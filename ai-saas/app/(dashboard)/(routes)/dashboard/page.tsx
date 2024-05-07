import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
      
    </div>
  );
};

export default DashboardPage;
