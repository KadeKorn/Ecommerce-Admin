'use client';

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
    const StoreModal = useStoreModalStore();
    
    return (
        <Modal
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen={false}
        onClose={() => {}}
        >
            Future Create Store Form
        </Modal>
    )
}