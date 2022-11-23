import { fromEvent } from "rxjs";
import { map, startWith } from "rxjs/operators";

export function createInputStream(node) {
  return fromEvent(node, "input").pipe(
    map((e) => e.target.value),
    startWith(color.value)
  );
}
