import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, childClass }) => {
    return (
        <ul className={parentClass}>
            {socialLinks.map((link) => {
                return <SocialLink key={link.id} link={link} childClass={childClass} />
            })}
        </ul>
    );
}

export default SocialLinks;