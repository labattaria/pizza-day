import { text__yellow } from '../Heading/heading.module.scss';

const Heading = ({ className, label }) => {

    return (
        <h1 className={className}>{label}<br />
            <span className={text__yellow}>Straight out of the oven, straight to you.</span>
        </h1>
    );
};

export default Heading;