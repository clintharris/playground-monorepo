export default function(req, res) {
  const now = new Date();
  res.send(now.toISOString())
}