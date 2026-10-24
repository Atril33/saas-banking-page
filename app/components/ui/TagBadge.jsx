const TagBadge = ({ text }) => {
  return (
    <span className="text-[theme(color.primary)] border-[theme(color.primary)] before:bg-[theme(color.primary)] relative rounded-[100px] border px-6 py-2 text-sm before:absolute before:top-1/2 before:left-3 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
      {text}
    </span>
  );
};

export default TagBadge;
