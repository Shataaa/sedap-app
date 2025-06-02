import frameworkData from "./frame.json";
import { useState } from "react";
export default function FrameworkList() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedRating: "",
    /*Tambah state lain beserta default value*/
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.title.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;
      const matchesRating = dataForm.selectedRating
      ? framework.rating.includes(dataForm.selectedRating)
      : true;

    return matchesSearch && matchesTag && matchesRating;
  });

  
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  const allRating = [
    ...new Set(frameworkData.flatMap((framework) => framework.rating)),
  ];
  return (
    <div>
      <div className="p-8">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          value={dataForm.searchTerm}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          name="selectedRating"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.selectedRating}
          onChange={handleChange}
        >
          <option value="">Rating</option>
          {allRating.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.selectedTag}
          onChange={handleChange}
        >
          <option value="">All Brand</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 font-semibold">
              Description: {item.description}
            </p>
            <p className="text-gray-600">
              Category: <b className="text-blue-400"> {item.category}</b>
            </p>
            <p className="text-gray-600">
              Harga:
              {item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>

            <p className="text-gray-600">
              Discount Percentage:{" "}
              <b className="text-red-500"> {item.discountPercentage}%</b>
            </p>

            <p className="text-gray-600">Stock: {item.stock}</p>

            <p className="text-gray-600">
              Width: {item.dimensions.width} <br />
              Height: {item.dimensions.height} <br />
              Depth: {item.dimensions.depth}
            </p>

            <div className="flex flex-col md:flex-row ">
              <div className=" w-full md:w-1/2 ">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-600 cursor-pointer text-white px-2 py-1 text-xs rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className=" w-full md:w-1/2 ">
                {" "}
                <p className="text-gray-600 text-right ">
                  {item.rating.toLocaleString()}
                </p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
