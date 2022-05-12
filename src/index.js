import domready from "domready"
import "./style.css"
import HexagonPatch from "./HexagonPatch"
import randomPalette from "./randomPalette"
import Color from "./Color"
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


function drawArrow(x0, y0, x1, y1)
{
    const { width, height} = config;

    const cx = width/2;
    const cy = height/2;

    const dy = y1 - y0;
    const dx = x1 - x0;

    if (dx * dx + dy * dy > 2)
    {
        const nx = dy * 0.08
        const ny = -dx * 0.08

        const start = 0.01
        const end = 0.5

        const x2 = x0 + (x1 - x0) * start
        const y2 = y0 + (y1 - y0) * start
        const x3 = x0 + (x1 - x0) * end
        const y3 = y0 + (y1 - y0) * end

        const x4 = x0 + (x1 - x0) * (start + (end - start) * 0.6)
        const y4 = y0 + (y1 - y0) * (start + (end - start) * 0.6)

        ctx.beginPath()
        ctx.moveTo(cx + x2, cy + y2)
        ctx.lineTo(cx + x3, cy + y3)

        ctx.moveTo(cx + x3, cy + y3)
        ctx.lineTo(cx + x4 + nx, cy + y4 + ny)
        ctx.moveTo(cx + x3, cy + y3)
        ctx.lineTo(cx + x4 - nx, cy + y4 - ny)
        ctx.stroke()
    }
}


function renderDebugFace(face, drawNext = false, ids = false)
{
    const { width, height} = config;

    const cx = width/2;
    const cy = height/2;

    const faceCentroid = face.centroid

    if (ids)
    {
        const label = String(face.id);
        const tm = ctx.measureText(label);
        ctx.fillStyle = "#ccc"
        ctx.fillText(label, cx + faceCentroid[0] - tm.width/2, cy + faceCentroid[1] + 4)
    }
    else
    {
        ctx.fillStyle = "#0f0"
        ctx.fillRect(cx + faceCentroid[0] - 2, cy + faceCentroid[1] - 2, 4, 4)
    }

    const first = face.halfEdge;
    let curr = first;

    ctx.save()

    ctx.strokeStyle = "#fff"
    ctx.beginPath()

    do
    {
        const next = curr.next;

        const x0 = 0|(cx + curr.vertex.x)
        const y0 = 0|(cy + curr.vertex.y)
        const x1 = 0|(cx + next.vertex.x)
        const y1 = 0|(cy + next.vertex.y)

        if (curr === first)
        {
            ctx.moveTo(x0, y0)
        }
        ctx.lineTo(x1, y1)

        curr = next
    }  while (curr !== first)
    ctx.stroke()
    ctx.restore()

    curr = first
    do
    {
        const next = curr.next;

        const x0 = 0|(cx + curr.vertex.x)
        const y0 = 0|(cy + curr.vertex.y)
        const x1 = 0|(cx + next.vertex.x)
        const y1 = 0|(cy + next.vertex.y)

        const x2 = 0|((x0 + x1)/2 - cx)
        const y2 = 0|((y0 + y1)/2 - cy)

        if (drawNext)
        {
            const { twin }  = curr;
            if (twin)
            {
                const [ x0, y0 ] = faceCentroid;

                ctx.strokeStyle = "#666"
                drawArrow(x2, y2, x0, y0);
            }

        }

        curr = next
    }  while (curr !== first)
}


function centerPoint(halfEdge)
{
    const { width, height} = config;

    const cx = width/2;
    const cy = height/2;

    const x0 = halfEdge.vertex.x
    const y0 = halfEdge.vertex.y
    const x1 = halfEdge.next.vertex.x
    const y1 = halfEdge.next.vertex.y

    return [
        cx + (x0 + x1)/2,
        cy + (y0 + y1)/2
    ]

}


function truchetFace(palette, face, hexagonSize)
{
    const { width, height} = config;

    const cx = width/2;
    const cy = height/2;

    const start = face.halfEdge;

    const choice = 0|Math.random() * 4

    let end = start;
    for (let i=0; i < choice; i++)
    {
        end = end.next
    }

    const [x1, y1] = face.centroid

    const [x0,y0] = centerPoint(start)
    const [x2,y2] = centerPoint(end)

    const color = start.color || end.color || (start.twin && start.twin.color)|| (end.twin && end.twin.color) || palette[0 | Math.random() * palette.length]
    start.color = color
    if (start.twin)
    {
        start.twin.color = color
    }
    end.color = color
    if (end.twin)
    {
        end.twin.color = color
    }
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(
        x0,
        y0
    );
    ctx.arcTo(
        x1 + cx,
        y1 + cy,
        x2,
        y2,
        Math.round(hexagonSize * 0.15)
    );
    ctx.lineTo(
        x2,
        y2
    );
    ctx.stroke()

    let curr = start
    let count = 0;
    do
    {
        if (!curr.color && !(curr.twin && curr.twin.color))
        {

            const [x0,y0] = centerPoint(curr)

            const color = palette[0 | Math.random() * palette.length]
            ctx.strokeStyle = color
            ctx.beginPath()
            ctx.moveTo(
                x0,
                y0
            );
            ctx.lineTo(
                x0,
                y0
            );
            ctx.stroke()

            curr.color = color
            if (curr.twin)
            {
                curr.twin.color = color
            }
        }

        count++;
        curr = curr.next;
    }  while (curr !== start)

}

const black = new Color(0,0,0)

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

            const palette = randomPalette()

            const hexagonSize = Math.round(width * (0.05 + Math.random() * 0.05))
            const patch = new HexagonPatch(0, 0, hexagonSize)

            const faces = patch.build();
            ctx.fillStyle = Math.random() < 0.5 ? "#000" : Color.from(palette[0|Math.random() * palette.length]).mix(black, 0.6).toRGBHex()
            ctx.fillRect(0,0, width, height);

            // faces.forEach( face => {
            //     renderDebugFace(face, true, false)
            // })

            ctx.save()
            ctx.lineWidth = Math.round(hexagonSize * 0.12)
            ctx.lineJoin = "round"
            ctx.lineCap = "round"

            faces.forEach( face => {
                truchetFace(palette, face, hexagonSize)
            })

        }

        paint()

        canvas.addEventListener("click", paint, true)
    }
);
