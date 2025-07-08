function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string): Promise<T> {
  return wait(100)
    .then(() => fetch(url))
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      return res.json();
    });
}

export const client = {
  get: <T>(fileName: string) => request<T>(`/books/${fileName}.json`),
};
