const size = {
    mobile: "576px",
    medium: "768px",
    large: "992px",
    xl: "1200px",
    xxl: "1400px",
    xxxl: "1600px"
}

const theme = {
    mobile: `(max-width: ${size.mobile})`,
    medium: `(max-width: ${size.medium})`,
    large: `(max-width: ${size.large})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
    xxxl: `(max-width: ${size.xxxl})`
}

export default theme;