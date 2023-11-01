import { Person } from "@/components/Person";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-5xl">Ola mundo</h1>
      <h3>João Luiz</h3>

      <Person
        name="Elon Musk"
        image="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg"
        roles={["CEO da Tesla", "CEO da SpaceX"]}
      />
      <Person
        name="Jeff Bezos"
        image="https://investidorsardinha.r7.com/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg"
        roles={["CEO da Amazon", "CEO da Blue Origin"]}
      />

      <Person name="João" roles={["Algo", "Dono de algo"]} />
    </div>
  );
}
