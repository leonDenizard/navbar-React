export default function ListLinkMobile({ links }) {
    return (
      <div className="absolute top-14 right-4">
        <ul className="bg-zinc-800 px-8 py-5 rounded-sm space-y-4 w-40">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="text-white"
              >
                {link.text}
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }