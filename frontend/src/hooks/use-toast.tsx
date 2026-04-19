import * as React from "react";
import type { ToastProps } from "@radix-ui/react-toast"
import Toast from "@/components/ui/toast"

// Add a unique ID to each toast
type ToastWithId = ToastProps & { id: string };

// ✅ Proper module export
export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastWithId[]>([]);

  const addToast = (toast: ToastProps) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);

    // Automatically remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Safe Toast container component
  const ToastContainer: React.FC = () => {
    if (toasts.length === 0) return null; // safe check for TS2365

    return (
      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  return { addToast, removeToast, ToastContainer };
};
