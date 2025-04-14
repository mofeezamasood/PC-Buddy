export const handleSuccess = (messageApi, message) => {
  messageApi.open({
    type: "success",
    content: message,
  });
};

export const handleError = (messageApi, message) => {
  messageApi.open({
    type: "error",
    content: message,
  });
};
