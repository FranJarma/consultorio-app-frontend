export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('es-AR');
}

export function formatTime(date: Date): string {
  return new Date(date).toLocaleTimeString('es-AR');
}

export function getCurrentArgentinaISODate () {
  const now = new Date();
  const argTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
  return argTime.toISOString().split(".")[0]; // Eliminar milisegundos
};