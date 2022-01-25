type MasterDetailLayoutProps = {
  header: React.ReactNode
  children: React.ReactNode
}

const MasterDetailLayout = ({ children, header }: MasterDetailLayoutProps) => {
  return (
    <>
      {header}
      {children}
    </>
  )
}

export default MasterDetailLayout
