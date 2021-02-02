import React from 'react';

class StickyiconComponent extends React.Component {

    render() {
        return (
            <ul className="sticky_ul">
            <li>
                <a href="#">
                    <img src="/images/chatbot.png" alt="Chatbot" />
                </a>
            </li>
            <li>
                <a href="tel:07966065606">
                    <img src="/images/call.png" alt="Call" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/images/user2.png" alt="User" />
                </a>
            </li>
        </ul>
        );
    }
}

export default StickyiconComponent;