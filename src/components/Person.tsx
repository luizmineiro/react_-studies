const getWeekDay = () => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    new Date()
  );
};

type Props = {
  name: string;
  image?: string;
  roles: string[];
};

export function Person({
  name,
  image = "https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg",
  roles,
}: Props) {
  return (
    <div className="p-5">
      <h1 className="mb-2 text-lg font-semibold text-gray-900">
        {name} - {getWeekDay()}
      </h1>
      <img className="w-40" alt={name} src={image} />
      <ul className="max-w-md list-disc list-inside">
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </div>
  );
}
