import styles from "./page.module.css"

interface NavContent {
    contentLink: string;
    contentName: string
}

export default function NavBarElement(props: NavContent) {
    return (
        <div className={styles.navbar_element}>
            <a href={props.contentLink}>{props.contentName}</a>
        </div>
    )
}