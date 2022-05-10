export function getSlip() {
  return fetch("https://api.adviceslip.com/advice").then((data) => data.json());
}
