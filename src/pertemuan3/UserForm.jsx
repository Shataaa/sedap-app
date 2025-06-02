import InputField from "./components/InputField";

export default function UserForm() {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 hover:shadow-2xl transition">
        <h2 className="text-2xl font-semibold text-center mb-4">Tambah User</h2>
        <InputField
          label="Nama"
          type="text"
          placeholder="Masukkan nama cuy"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Silahkan ketik EMail..."
        />
        <InputField label="Tanggal Lahir" type="date" />
        <button className="w-full bg-green-500 text-white p-2 rounded">
          Simpan
        </button>
      </div>
    </div>
  );
}
