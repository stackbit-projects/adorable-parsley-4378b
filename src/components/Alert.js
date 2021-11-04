const Alert = ({ annotationPrefix, body }) => {
    return <div data-sb-field-path={annotationPrefix} className="py-6 bg-primary">
        <p data-sb-field-path=".body">{body}</p>
    </div>
}

export default Alert