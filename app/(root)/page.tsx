"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test "
        description="Test Description"
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
// aftersignouturl - for better developer/user experience use this so it redirects to home else it will bring you to clerk
