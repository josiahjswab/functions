import React, { useEffect, useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import populateTemplate from '../../../tm-template';
// import data from '../../../TestCard.json';

export default function AuthorAdaptiveCard() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [message, setMessage] = useState('');
    const [sendTime, setSendTime] = useState(new Date());
    const [testDB, setTestDB] = useState('');
    
    useEffect(() => {

    }, []);



    const clickk = () => {
        let data = populateTemplate(title, linkTitle, link, message);
        console.log(data);
        fetch('https://creatingcodingcareers.webhook.office.com/webhookb2/43b1c5da-d622-43ba-9171-10f4cdcce3ca@2a753dfc-6438-4fbd-b3de-dc0369890298/IncomingWebhook/ac0d9658792e4b128512a6dede6f39f7/195e1edb-17f8-433b-883c-7b1d82781129', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(data),
        });
    }

    const clickkk = () => {
        fetch('/getTM')
            .then(data => {console.log(data);})
            .then(results => { setTestDB(results)} )
            .catch(err => console.log(err));

        console.log('ping');

    }

    return (
        <div>
            <div>   
                <label>Title:</label>
                <input value={title} onChange={ e => setTitle(e.target.value) } type="text" />
            </div>
            <div>
                <label>Link Title:</label>
                <input value={linkTitle} onChange={ e => setLinkTitle(e.target.value) } type="url" />
            </div>  
            <div>
                <label>Link URL:</label>
                <input value={link} onChange={ e => setLink(e.target.value) } type="url" />
            </div>            
            <div>
                <label>Message:</label>
                <input value={message} onChange={ e => setMessage(e.target.value) } type="text" />
            </div>
            {/* <div>
                <label>Time:</label>
                <DateTimePicker value={sendTime} onChange={ e => setSendTime(e) } />
            </div> */}
            <button onClick={clickk}>Send Message</button>
            <button onClick={clickkk}>Test get</button>
            {testDB}
        </div>
    )
}
