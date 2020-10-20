import React from 'react';
import "./Widget.css";

function Widget() {
    return (
        <div className="widget">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHello-There-100319018503271&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="100%" style={{border:"none", overflow:"scroll"}} scrolling="no" frameborder="0"  allow="encrypted-media"></iframe>
        </div>
    )
}

export default Widget
