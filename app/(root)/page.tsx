import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
     <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
// aftersignouturl - for better developer/user experience use this so it redirects to home else it will bring you to clerk