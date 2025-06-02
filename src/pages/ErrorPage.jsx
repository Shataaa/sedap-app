import { Link } from "react-router-dom";
export default function ErrorPage({title,title1,breadcrump1,breadcrump2,link,}) {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col"
      style={{
        backgroundImage:
          'url("https://images3.alphacoders.com/108/1080217.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-semibold text-bla">
          {title}
          <span className="text-hijau text-xl"> .</span>
        </h1>
      </header>

      <div className="flex-grow flex items-center justify-start px-10 relative">
        <div className="z-10">
          <h2 className="text-6xl font-bold mb-4">{title1}</h2>
          <h3 className="text-2xl font-semibold mb-2">{breadcrump1}</h3>
          <p className="text-white/70 mb-6">{breadcrump2}</p>
          <Link to="/" className="text-blue-400 hover:underline">
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
}
