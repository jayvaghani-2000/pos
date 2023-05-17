import { Progress } from 'antd';
import classNames from 'classnames';
import './progressBar.scss'

const ProgressBar = (props) => {
    const { className, ...rest } = props;
    return (
        <Progress {...rest} strokeColor="#04953E" className={classNames({ [className]: className })} />
    );
};

export default ProgressBar;
