export const Feature = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex p-3">
      <Check />
      <div className="font-bold text-sm -translate-y-1">
        {title}
      </div>
      <div className="font-base text-sm -translate-y-1 ml-1">
        {subtitle}
      </div>
    </div>
  );
};

function Check() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="size-3 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>;
}
