import { render } from '@redwoodjs/testing/web'

import MasterDetailLayout from './MasterDetailLayout'

describe('MasterDetailLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MasterDetailLayout header={<h2>Header</h2>}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            cupiditate, veritatis excepturi modi rerum, facilis laborum
            blanditiis officiis dolorum ratione sapiente cum. Dolorem, quod!
            Eius dolorem sed iusto error ducimus.
          </p>
        </MasterDetailLayout>
      )
    }).not.toThrow()
  })
})
