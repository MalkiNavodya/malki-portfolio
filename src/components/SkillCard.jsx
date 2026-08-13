function SkillCard({ icon, name, category }) {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        gap-3
        p-6
        rounded-2xl
        bg-white/[0.03]
        border
        border-white/10
        backdrop-blur-xl
        hover:border-[#FF7350]/50
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <div
        className="
          text-5xl
          group-hover:scale-110
          transition-transform
          duration-300
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-white
          font-semibold
        "
      >
        {name}
      </h3>

      <p
        className="
          text-gray-500
          text-sm
        "
      >
        {category}
      </p>
    </div>
  );
}

export default SkillCard;