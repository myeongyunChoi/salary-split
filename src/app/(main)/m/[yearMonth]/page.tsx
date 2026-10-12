export default async function YearMonthPage({ params }: PageProps<'/m/[yearMonth]'>) {
  const { yearMonth } = await params

  return (
    <div>
      <h1 className="text-lg font-bold">{yearMonth}</h1>
      <p className="mt-2 text-sm text-gray-500">TODO: 해당 달 체크리스트</p>
    </div>
  )
}
