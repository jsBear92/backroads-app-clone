const SocialLink = ({ link, childClass}) => {
    return (
        <li key={link.id}>
            <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={childClass}
            >
                <i className={link.icon}></i>
            </a>
        </li>
    );
}

export default SocialLink;