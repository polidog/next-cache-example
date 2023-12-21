import { getDate } from "../_api"

export default async function Page(): Promise<JSX.Element> {
  const { message, now } = await getDate()
  return (
    <div>
      <h3>LocalDate: {Date.now()}</h3>
      <h4>ServerDate: {now}, {message}</h4>
    </div>
  )
}