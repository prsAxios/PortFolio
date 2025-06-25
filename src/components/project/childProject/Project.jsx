import Styles from "./project_.module.scss";

const Project = ({ title, manageModal, index, description, slug, onProjectClick }) => {
    return (
        <div
            onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY)
            }}
            onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
            }}
            className={Styles.project}
            onClick={() => onProjectClick(slug)}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Project;