export default function Stats() {
  const items = [
    { value: "3+", label: "Years Experience", type: "outline" },
    { value: "30+", label: "Projects", type: "filled" },
    { value: "90+", label: "Student", type: "outline" },
    { value: "20+", label: "Happy Clients", type: "filled" },
  ] as const;

  return (
    <div className=" bg-black flex items-center justify-center p-4 mt-12">
      <div className="grid grid-cols-2 gap-10">
        {items.map((it, idx) => {
          const gradient =
            "bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500";

          if (it.type === "outline") {
            return (
              <div
                key={idx}
                className={`w-44 h-44 rounded-full p-0.5 ${gradient}`}
              >
                <div className="w-full h-full rounded-full bg-black flex flex-col items-center justify-center text-white text-center">
                  <div className="text-4xl font-bold leading-none">
                    {it.value}
                  </div>
                  <div className="mt-3 text-sm opacity-90">{it.label}</div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={idx}
              className={`w-44 h-44 rounded-full ${gradient} flex flex-col items-center justify-center text-white text-center
              `}
            >
              <div className="text-4xl font-bold leading-none">{it.value}</div>
              <div className="mt-3 text-sm opacity-90">{it.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
