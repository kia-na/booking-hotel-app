import { useEffect } from "react";

export default function useOutsideClick(ref, setOpenOption) {
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== "dropDown"
      ) {
        setOpenOption(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, setOpenOption]);
}
