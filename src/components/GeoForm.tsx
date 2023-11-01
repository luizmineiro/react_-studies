import { Circle } from "./Circle";
import { Square } from "./Square";

export function GeoForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Formas Geometricas</h2>
      <div className="flex gap-2 border-2 border-lime-500 p-3">
        <Square />
        <Circle />
      </div>
    </div>
  );
}
