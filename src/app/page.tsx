import { Card } from "@/components/Card";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo</h1>
      <h3>João Luiz</h3>

      <Card phrase="Alguma frase TOP!!!" author="Coach de milhões" />
    </div>
  );
}
