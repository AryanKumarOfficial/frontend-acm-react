import {useState} from "react";

export function useToast() {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        setToasts((prevToasts) => [...prevToasts, toast]);
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return {
        toasts,
        addToast,
        removeToast,
    };
}
