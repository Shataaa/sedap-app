export default function TailwindCSS() {
  return (
    <div>
      <FlexboxGrid />
      <BackgroundColors />
      <ShadowEffects />
      <Spacing />
      <Typography />
      <BorderRadius />
      <h1 className=" bg-blue-500 text-white justify-between shadow-lg p-6 m-4 rounded-lg hover:shadow-2xl transition font-bold">Belajar TailwindCSS</h1>
      <button className="transform-3dbg-blue-600 text-blue-600 px-5 py-3 mx-5 rounded shadow-lg ">Belajar</button>
      
    </div>
  );
}
function Spacing() {
  return (
    <div className="bg-white shadow-lg p-6 m-4 rounded-lg hover:shadow-2xl transition">
      <h2 className="text-lg font-semibold">Card Title</h2>
      <p className="mt-2 text-gray-600">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  );
}
function Typography() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 m-4 ">Tailwind Typography</h1>
      <p className="text-gray-600 text-lg mt-2 m-4">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  );
}
function BorderRadius() {
  return (
    <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full m-4">
      {" "}
      Klik Saya{" "}
    </button>
  );
}
function BackgroundColors() {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg m-4 hover:shadow-2xl transition">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
    </div>
  );
}
function FlexboxGrid() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">MyWebsite</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
function ShadowEffects() {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition m-4">
      <h3 className="text-xl font-semibold">Hover me!</h3>
      <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
    </div>
  );
}
