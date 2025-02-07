export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('es-AR', { year: 'numeric', month: 'short', day: '2-digit' });
}

export function formatTime(date: Date): string {
  return new Date(date).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

export function getCurrentArgentinaISODate(): string {
  const now = new Date();
  const argTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
  return argTime.toISOString().split(".")[0];
}
