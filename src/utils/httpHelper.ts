export const get = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint, {
      headers: {
        Accept: "application/json"
      }
    });
    if (res.status === 200) {
      const response = await res.json();
      return { err: false, data: response };
    } else throw new Error();
  } catch {
    return { err: true, data: {} };
  }
};
