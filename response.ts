interface ResponseOk {
  status: boolean,
  message?: string,
  results: object
};

interface ResponseErr {
  status: boolean,
  code: string,
  message: string,
  stack?: object
};

// interface ResponseCustomErr {
//   status: boolean,
//   code: string,
//   message: string,
//   stack?: object
// };

export { ResponseOk, ResponseErr };