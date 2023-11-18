import { peopleList } from "@/data/peopleList";

export default function page() {
  const engenheiros = peopleList.filter(
    (person) => person.profession === "Engenheira de Software"
  );

  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3 className="font-black">João Luiz</h3>
      {engenheiros.length > 0 && (
        <>
          <h3 className="font-semibold text-red-600 text-lg">
            Lista de engenheiros de software:
          </h3>
          <ul>
            {engenheiros.map((person) => (
              <li key={person.id}>
                {person.name} - {person.profession}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
