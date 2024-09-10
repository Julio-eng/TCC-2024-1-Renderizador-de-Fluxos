export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?formId=${id}`)
  const occupation = await res.json()

  return Response.json({ occupation })
}