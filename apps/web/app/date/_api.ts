export type ApiResult = {
  message: string
  now: number
}
export async function getDate(): Promise<ApiResult> {
  const res = fetch('http://localhost:8000/')
  
  return (await res).json() as Promise<ApiResult>
}