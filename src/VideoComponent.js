 
import React from 'react';

class VideoComponent extends React.Component {

    render() {
        return (
            <div className="col-lg-5">
            <div class="videoWrapper videoWrapper169 js-videoWrapper">
                
                <iframe class="videoIframe js-videoIframe" src="" frameborder="0" allowTransparency="true" allowfullscreen data-src="https://www.youtube.com/embed/hgzzLIa-93c?autoplay=1& modestbranding=1&rel=0&hl=sv"></iframe>
               
                <button class="videoPoster js-videoPoster" style={{backgroundImage:'url(/images/bg-video.jpg)'}}>Play video</button>
            </div>
        </div>
        );
    }
}

export default VideoComponent;