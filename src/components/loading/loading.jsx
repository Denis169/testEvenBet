import './styles.less';

export const Loading = () => {
    return (
        <div className="loading">
            <div className="loading_bar">
                <div className="result_bar"></div>
            </div>
            <div className="caption">Loading 70%</div>
        </div>
    );
}