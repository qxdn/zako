import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import Zako from './components/Zako';
import Jumper from './components/Jumper';
import './index.css'
// TODO:晚点改成cdn形式
import zako from './assets/zako.ogg';
import zako2 from './assets/zako2.ogg';
import zako3 from './assets/zako3.ogg';
import zako4 from './assets/zako4.ogg';
import zako5 from './assets/zako5.ogg';
import zako6 from './assets/zako6.ogg';
import zako7 from './assets/zako7.ogg';
import zako8 from './assets/zako8.ogg';
import zako9 from './assets/zako9.ogg';
import zako10 from './assets/zako10.ogg';
import zako11 from './assets/zako11.ogg';
import zako12 from './assets/zako12.ogg';

const colorMap = [{
    dur: 12,
    color: 'red',
    size: "35px",
    text: "杂鱼~♡ 杂鱼~♡"
}, {
    dur: 15,
    color: 'aqua',
    size: "40px",
    text: "zako~♡ zako~♡"
}, {
    dur: 11,
    color: 'coral',
    size: "25px",
    text: "ざぁこ♡ ざぁこ♡"
}, {
    dur: 7,
    color: 'black',
    size: "19px",
    text: "杂鱼~♡ 杂鱼~♡"
}, {
    dur: 10,
    color: 'greenyellow',
    size: "29px",
    text: "zako~♡ zako~♡"
}, {
    dur: 12,
    color: 'gold',
    size: '18px',
    text: "ざぁこ♡ ざぁこ♡"
}, {
    dur: 15,
    color: 'orange',
    size: '50px',
    text: "ざぁこ♡ ざぁこ♡"
}, {
    dur: 11,
    color: 'pink',
    size: '80px',
    text: "zako~♡ zako~♡"
}, {
    dur: 12,
    color: 'silver',
    size: "45px",
    text: "杂鱼~♡ 杂鱼~♡"
}, {
    dur: 18,
    color: 'cyan',
    size: "29px",
    text: "zako~♡ zako~♡"
}, {
    dur: 11,
    color: 'greenyellow',
    size: "23px",
    text: "杂鱼~♡ 杂鱼~♡"
}, {
    dur: 14,
    color: 'grey',
    size: "19px",
    text: "zako~♡ zako~♡"
}, {
    dur: 6,
    color: 'violet',
    size: "45px",
    text: "ざぁこ♡ ざぁこ♡"
}, {
    dur: 15,
    color: 'blue',
    size: '26px',
    text: "zako~♡ zako~♡"
}, {
    dur: 14,
    color: 'green',
    size: '50px',
    text: "杂鱼~♡ 杂鱼~♡"
}, {
    dur: 12,
    color: 'aqua',
    size: '75px',
    text: "zako~♡ zako~♡"
}, {
    dur: 11,
    color: 'black',
    size: "25px",
    text: "杂鱼~♡ 杂鱼~♡"
}]

const audioList = [zako, zako2, zako3, zako4, zako5, zako6, zako7, zako8, zako9, zako10, zako11, zako12]

const App = () => {

    let audioIndex = 0;

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
    }

    const zakoAppend = (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const span = document.createElement('span')
        span.innerHTML = 'ざぁこ♡ ざぁこ♡';
        span.style.cssText = `position: absolute; left: ${x}px; top: ${y - 20}px; color: ${randomColor()}; bold;`;
        document.body.appendChild(span);
        const animation = span.animate({
            "top": `${y - 180}px`,
            "opacity": 0
        }, {
            duration: 1500,
        });
        new Audio(audioList[audioIndex]).play();
        audioIndex = (audioIndex + 1) % audioList.length;
        animation.onfinish = () => {
            span.remove();
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', zakoAppend)

        return () => {
            document.body.removeEventListener('click', zakoAppend)
        }
    })

    return (
        <div>
            <Jumper />
            <div>
                {colorMap.map(item => <Zako {...item} />)}
            </div>
        </div>
    );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
