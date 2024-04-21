const HeadingTextContent = ({ className, label }) => {
    return (
        <span className={className}>{label}</span>
    );
};

const Heading = ({ className, label }) => {

    return (
        <h1 className={className}>{label}<br />
            <HeadingTextContent className="text-yellow" label="Straight out of the oven, straight to you." />
        </h1>
    );
};

export default Heading;