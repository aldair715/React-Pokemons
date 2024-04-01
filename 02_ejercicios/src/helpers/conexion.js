const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method ? options.method : "GET";
    options.headers = options.headers
      ? { ...options.headers, ...defaultHeader }
      : defaultHeader;
    options.body = options.body ? JSON.stringify(options.body) : false;
    if (!options.body) delete options.body;
    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((error) => error);
  };
  const get = (url, options = {}) => customFetch(url, options),
    post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    },
    put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    },
    del = (url, options) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  return {
    get,
    post,
    put,
    del,
  };
};
export default helpHttp;
