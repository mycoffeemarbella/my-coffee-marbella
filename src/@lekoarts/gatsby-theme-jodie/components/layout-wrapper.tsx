/** @jsx jsx */
import { jsx } from "theme-ui"

type LayoutWrapperProps = { children: React.ReactNode }

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: (t: any): any => {console.log(t);return[`1fr`, `1fr`, `1fr`, `${t.sidebar.normal} 1fr`, `${t.sidebar.wide} 1fr`]},
    }}
  >
    {children}
  </div>
)

export default LayoutWrapper
