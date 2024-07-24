export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`http://localhost:4000/${id}`)
  const occupation = await res.json()
 
  return Response.json({ occupation })
}