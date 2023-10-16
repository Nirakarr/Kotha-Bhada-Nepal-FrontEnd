import React from "react";

const THInfoTable = () => {
  return (
    <>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
          >
            Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
          >
            Contact No.
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell"
          >
            Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell"
          >
            Image
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
    </>
  );
};

export default THInfoTable;
