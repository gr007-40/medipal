import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import MuiButton from "@mui/material/Button";

export default function Link({Type, href, children, ...props}) {
    if (Type === "link" || !Type) {
        return (
            <NextLink href={href} passHref>
                <MuiLink {...props}>{children}</MuiLink>
            </NextLink>
        );
    } else if (Type === "button") {
        return (
            <NextLink href={href} passHref>
                <MuiButton {...props}>{children}</MuiButton>
            </NextLink>
        );
    }
}
