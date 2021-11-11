import React, { useEffect } from 'react';
import data from '../../../TestCard.json';

export default function AuthorAdaptiveCard() {
    
    useEffect(() => {

    }, []);

    const clickk = () => {
        fetch('https://creatingcodingcareers.webhook.office.com/webhookb2/43b1c5da-d622-43ba-9171-10f4cdcce3ca@2a753dfc-6438-4fbd-b3de-dc0369890298/IncomingWebhook/ac0d9658792e4b128512a6dede6f39f7/195e1edb-17f8-433b-883c-7b1d82781129', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(data),
        });
    }

    return (
        <div>
            <button onClick={clickk}>Send Message</button>
        </div>
    )
}
