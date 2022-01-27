import CoreProjectCell from 'src/components/Admin/CoreProject/CoreProjectCell'

type CoreProjectPageProps = {
  id: number
}

const CoreProjectPage = ({ id }: CoreProjectPageProps) => {
  return <CoreProjectCell id={id} />
}

export default CoreProjectPage
