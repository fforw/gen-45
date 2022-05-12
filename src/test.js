import domready from "domready"
import "./style.css"

import perfNow from "performance-now"

const PHI = (1 + Math.sqrt(5)) / 2;
const TAU = Math.PI * 2;
const DEG2RAD_FACTOR = TAU / 360;

const config = {
    width: 0,
    height: 0
};

/**
 * @type CanvasRenderingContext2D
 */
let ctx;
let canvas;

const REPEAT = 10000;

domready(
    () => {

        canvas = document.getElementById("screen");
        ctx = canvas.getContext("2d");

        const width = (window.innerWidth) | 0;
        const height = (window.innerHeight) | 0;

        config.width = width;
        config.height = height;

        canvas.width = width;
        canvas.height = height;

        const paint = () => {

            ctx.fillStyle = "#000";
            ctx.fillRect(0,0, width, height);

            ctx.strokeStyle = "#f0f";
            ctx.fillStyle = "#f0f";
            ctx.lineWidth = 100
            ctx.lineJoin = "round"
            ctx.lineCap = "round"

            const s0 = perfNow()
            for (let i = 0; i < REPEAT; i++)
            {
                ctx.beginPath()
                ctx.moveTo(100,100);
                ctx.lineTo(100,100);
                ctx.stroke()
            }
            const e0 = perfNow()


            const s1 = perfNow()
            for (let i = 0; i < REPEAT; i++)
            {
                ctx.beginPath()
                ctx.moveTo(250,100);
                ctx.arc(200, 100, 50, 0, TAU, true)
                ctx.fill()
            }
            const e1 = perfNow()

            const d0 = (e0-s0)/1000;
            const d1 = (e1-s1)/1000;

            console.log("LINE", d0)
            console.log("CIRCLE", d1, d1/d0 * 100+ "%")
        }

        paint()

        canvas.addEventListener("click", paint, true)
    }
);
