import { extendTheme } from "@chakra-ui/react"

const theme = {
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
  // TODO: Make It Work
  components: {
    Breadcrumb: {
      baseStyle: {
        color: "gray.500",
        marginTop: "20px",
        fontWeight: "bold"
      }
    }
  }
}

export default extendTheme(theme)