const smallDataUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const bigDataUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


const getDataPersonsSmall = async () => {
    const res = await fetch(smallDataUrl);

    return await res.json();
};

const getDataPersonsBig = async () => {
    const res = await fetch(bigDataUrl);

    return await res.json();
};

export {
    getDataPersonsSmall,
    getDataPersonsBig
};