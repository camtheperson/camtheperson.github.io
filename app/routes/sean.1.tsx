import { Link } from "@remix-run/react";

export default function Sean() {
  const newRoute = "/sean/2";

  return (
    <div className="h-dvh grid content-center place-content-center">
      <h1 className="font-bold mb-2">Hello Sean</h1>
      <p>Oh, you thought this was the end, right? Yeah I bet you did.</p>
      <p>Not by a long shot, my friend. Not by a looooonnngg shot.</p>
      <Link className="font-bold mt-2" to={newRoute}>Click here</Link>
    </div>
  )
}
