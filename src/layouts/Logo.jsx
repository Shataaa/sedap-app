export default function Logo() {
  return (
    <div id="sidebar-logo " className="flex flex-col">
      <span
        id="logo-title "
        className="font-barlowxl text-[48px] text-gray-900"
      >
        Sedap{" "}
        <b id="logo-dot" className="text-hijau">
          .
        </b>
      </span>

      <div id="logo-subtitle" className="font-semibold text-gray-400">
        <span>Modern Admin Dashboard</span>
      </div>
    </div>
  );
}
