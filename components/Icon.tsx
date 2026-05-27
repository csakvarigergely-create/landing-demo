type IconProps = {
  name: "bolt" | "shield" | "spark" | "snow" | "tool" | "home" | "factory" | "clock";
  className?: string;
};

const paths = {
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  shield: "M12 3l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V7l8-4z",
  spark: "M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2z",
  snow: "M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1L19.1 4.9",
  tool: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.8 2.8-2.1-2.1 2.8-2.8z",
  home: "M3 11l9-8 9 8v10h-6v-6H9v6H3V11z",
  factory: "M3 21V9l6 4V9l6 4V6h6v15H3z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2"
};

export function Icon({ name, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
