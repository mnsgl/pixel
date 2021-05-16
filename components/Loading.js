import React from "react";

export default function Loading() {
  const [repeat, setRepeat] = React.useState(1);
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current = setTimeout(() => {
      setRepeat((prev) => prev + 1);
    }, 800);
    return () => {
      clearInterval(ref.current);
    };
  }, [repeat]);
  return (
    <div className="flex flex-1 h-screen justify-center items-center text-5xl">
      Loading{".".repeat(repeat % 4)}
    </div>
  );
}
