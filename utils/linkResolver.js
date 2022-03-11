exports.linkResolver = () => (doc) => {
  return `/${doc.uid}`
}