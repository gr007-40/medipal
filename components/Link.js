import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import MuiButton from '@mui/material/Button';
import { IconButton } from '@mui/material';

export default function Link({ Type, href, children, ...props }) {
    if (Type === 'link' || !Type) {
        return (
            <NextLink
                href={href}
                passHref
            >
                <MuiLink {...props}>{children}</MuiLink>
            </NextLink>
        );
    } else if (Type === 'button') {
        return (
            <NextLink
                href={href}
                passHref
            >
                <MuiButton {...props}>{children}</MuiButton>
            </NextLink>
        );
    } else if (Type === 'iconButton') {
        return (
            <NextLink
                href={href}
                passHref
            >
                <IconButton {...props}>{children}</IconButton>
            </NextLink>
        );
    }
}
