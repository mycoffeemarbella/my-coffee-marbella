/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"
import Glovo from '../../../../static/glovo.png'
import Uber from '../../../../static/ubereats.png'
import JustEat from '../../../../static/justeat.png'

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme!.colors!.textMuted as string | undefined,
    theme!.colors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>    
      <Link href="https://glovoapp.com/es/en/marbella/my-coffee-marbella-mba/"> <img src={Glovo} height="30px" alt="glovo"/> </Link>
      <Link href="https://www.ubereats.com/es/malaga/food-delivery/my-coffee-marbella/02QmE2jASxq9a_fZveS7eg/d3a8c8ec-3719-43b4-b454-23c20557f73f"> <img src={Uber} height="30px" alt="uber"/> </Link>
      <Link href="https://www.just-eat.es/restaurants-my-coffe-marbella-marbella/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction"> <img src={JustEat} height="30px" alt="justeat"/> </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        {/* <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie"
        >
          Site
        </Link> */}
        {` `}
        Site by
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://rsportfolio.co.uk/">
          @DesignRusso
        </Link>
      </div>
    </footer>
  )
}

export default Footer
