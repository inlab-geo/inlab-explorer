export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-_.]/g, '');
}

export function treeToSlug(displayName: string): string | null {
  if (displayName === "CoFI Methods")      return "methods";
  if (displayName === "CoFI Examples")     return "examples";
  if (displayName === "Espresso Problems") return "espresso";
  return null;
}

export function getPathParam(): string | null {
  return new URLSearchParams(window.location.search).get("path");
}

export function setPathParam(path: string | null): void {
  const params = new URLSearchParams(window.location.search);
  if (path !== null) params.set("path", path);
  else params.delete("path");
  window.history.replaceState(null, "", "?" + params.toString());
}

export function setTreeParam(slug: string): void {
  const params = new URLSearchParams(window.location.search);
  params.set("tree", slug);
  params.delete("path");
  window.history.replaceState(null, "", "?" + params.toString());
}
