

export default function ListLink({ links }) {
  
  return (
    <div className="hidden sm:block">
      <ul className="flex gap-4 ml-2">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.link}
              className="relative text-lg font-Roboto font-medium text-zinc-900 group"
            >
              {link.text}
              <span className="block absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
