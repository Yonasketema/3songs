interface Fetcher {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PATCH";
  body?: object;
  json?: boolean;
}

const fetcher = async ({ url, method, body, json = true }: Fetcher) => {
  const response = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("api error");
  }

  if (json) {
    const data = await response.json();
    return data;
  }
};

export default fetcher;
