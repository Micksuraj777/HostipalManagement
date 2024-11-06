import React from "react";

export function Tables({ data }) {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Patient ID
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Phone No
                    </th>
                    <th
                      scope="col"
                      className="w-2/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Blood Group
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Room No
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Referred Doctor
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Date of Join
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Date of Birth
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.patient_id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {item.patient_id}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.phone_no}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.address}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.blood_group}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.gender}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.room}
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                          item.status === "Admitted"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.refer_doc}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.date_of_join}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.date_of_birth}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.age}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function Tables2({ data }) {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Doctor ID</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Doctor Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Department</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Phone No</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Status</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.doctor_id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {item.doctor_id}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.department}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.phone_no}
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                          item.status === "Active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export function RoomAvailabilityTable({ data }) {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Room No
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Patient ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.room_no}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {item.room_no}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.patient_id || "N/A"}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.type}
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                          item.status === "Occupied"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicineTable({ data }) {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>SL NO</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Medicine Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Dosage</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Manufacturer</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Price</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Status</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.medicine_id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {item.medicine_id}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.dosage}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.manufacturer}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.price}
                      </td>
                      <td
                        className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                          item.status === "Available"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
