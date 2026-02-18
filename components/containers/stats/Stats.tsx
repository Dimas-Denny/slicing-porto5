export default function Stats() {
  const items = [
    { value: "3+", label: "Years Experience", outline: true },
    { value: "30+", label: "Projects", outline: false },
    { value: "90+", label: "Student", outline: true },
    { value: "20+", label: "Happy Clients", outline: false },
  ];

  const gradient = "bg-gradient-to-r from-pink-500 to-purple-500";

  return (
    <div className="bg-black flex items-center justify-center p-4 mt-12">
      <div className="grid grid-cols-2 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className={`
              w-44 h-44 rounded-full
              ${item.outline ? `p-0.5 ${gradient}` : gradient}
              flex items-center justify-center
            `}
          >
            <div
              className={`
                w-full h-full rounded-full
                flex flex-col items-center justify-center
                text-white text-center
                ${item.outline ? "bg-black" : ""}
              `}
            >
              <div className="text-4xl font-bold leading-none">
                {item.value}
              </div>
              <div className="mt-3 text-sm opacity-90">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
