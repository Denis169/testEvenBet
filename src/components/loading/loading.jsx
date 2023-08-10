import './styles.less';

export const Loading = ({ screenSize }) => {
    return (
        <div className="loading">
            <div className="loading_bar">
                <div className="result_bar" style={{width: `${Math.round(screenSize.width/2048*100)}%` }}></div>
            </div>
            <div className="caption">{`Loading ${Math.round(screenSize.width/2048*100)}%`}</div>
        </div>
    );
}