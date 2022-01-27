import CoreDevelopmentCell from 'src/components/Admin/CoreDevelopment/CoreDevelopmentCell'

type CoreDevelopmentPageProps = {
  id: number
}

const CoreDevelopmentPage = ({ id }: CoreDevelopmentPageProps) => {
  return <CoreDevelopmentCell id={id} />
}

export default CoreDevelopmentPage
