const generateLocationMessage = (url) => {
  return {
    url,
    createdAt: new Date().getTime(),
  }
}

export default generateLocationMessage
