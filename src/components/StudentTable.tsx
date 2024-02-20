import { Student } from "@/types/student";

type Props = {
  students: Student[];
};

export const StudentTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-700 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-700 bg-gray-800 text-white">
          <th>Name</th>
          <th>Status</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((item) => (
          <tr
            key={item.id}
            className="text-gray-800 bg-gray-400 border-b border-gray-600"
          >
            <td className="p-3 flex items-center">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <div className="font-bold">{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td className="p-3">
              {item.active && (
                <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">
                  Active
                </div>
              )}
              {!item.active && (
                <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">
                  Inactive
                </div>
              )}
            </td>
            <td>{item.grade1.toFixed(1)}</td>
            <td>{item.grade2.toFixed(1)}</td>
            <td className="font-bold">
              {item.active
                ? ((item.grade1 + item.grade2) / 2).toFixed(1)
                : "--"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
