import domready from "domready"
import "./style.css"
import HexagonPatch from "./HexagonPatch"
import randomPalette, { randomPaletteWithBlack } from "./randomPalette"
import Color from "./Color"
import { Shape } from "./geometry"
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



function mergeShapes(faces, start, end)
{



    const startShape = start.edge.shape
    const endShape = end.edge.shape

    let oldShape = null;
    if (!startShape)
    {
        oldShape = endShape
    }
    if (!endShape)
    {
        oldShape = startShape
    }

    if (oldShape)
    {
        for (let i = 0; i < faces.length; i++)
        {
            const face = faces[i]
            
        }
    }

    const shape = startShape.concat(endShape)

}


function truchetFace(palette, faces, face)
{
    const { width, height } = config;

    const cx = width/2;
    const cy = height/2;

    const start = face.halfEdge;

    const repeat = Math.floor(1 + Math.random() * 2)

    const [x1, y1] = face.centroid

    for (let i=0; i < repeat; i++)
    {
        const choice = 0|Math.random() * 4

        let end = start;
        for (let i=0; i < choice; i++)
        {
            end = end.next
        }


        const [x0,y0] = centerPoint(start)
        const [x2,y2] = centerPoint(end)

        const shape = Shape.merge(start, end)

        shape.points.push(
            [
                x0,y0,
                x1 + cx, y1 + cy,
                x2, y2
            ]
        )

    }
}

function paintShapes(faces, background)
{
    const { hexagonSize, palette } = config

    const shapes = new Set()

    faces.forEach(
        face => {
            const start = face.halfEdge;
            let curr = start
            do
            {
                const { shape } = curr.edge
                if (shape)
                {
                    shapes.add(shape)
                }

                curr = curr.next;
            }  while (curr !== start)
        }
    )

    ctx.lineWidth = Math.round(hexagonSize * 0.12)
    ctx.lineJoin = "round"
    ctx.lineCap = "round"

    for (let shape of shapes)
    {
        let index
        do
        {
            index = 0 | Math.random() * palette.length
        } while(index === background)
        const color = palette[index]
        ctx.strokeStyle = color

        ctx.beginPath()
        const { points } = shape
        for (let i = 0; i < points.length; i++)
        {
            const elem = points[i]
            if (elem.length === 6)
            {
                const [ x0,y0, x1, y1, x2 , y2 ] = elem

                ctx.moveTo(
                    x0,
                    y0
                );
                ctx.arcTo(
                    x1,
                    y1,
                    x2,
                    y2,
                    Math.round(hexagonSize * 0.15)
                );
                ctx.lineTo(
                    x2,
                    y2
                );

            }
            else if (elem.length === 2)
            {
                const [ x0,y0 ] = elem
                ctx.moveTo(
                    x0,
                    y0
                );
                ctx.lineTo(
                    x0,
                    y0
                );
            }
            else
            {
                throw new Error("Invalid shape element" + JSON.stringify(elem))
            }
        }
        ctx.stroke()
    }
}

function mapKey(x,y)
{
    return Math.round(x) + "/" + Math.round(y)
}

function checkCentroids(faces)
{

    const { width, height} = config;

    const cx = width/2;
    const cy = height/2;


    const centroids = new Map()

    faces.forEach(
        face => {
            const [x,y] = face.centroid

            const key = mapKey(x,y)
            const e = centroids.get(key)
            if (e)
            {
                e.count++
            }
            else
            {
                centroids.set(key, {
                    x,
                    y,
                    count: 1
                })
            }
        }
    )

    for (let {x,y,count} of centroids.values())
    {
        ctx.fillStyle = count === 1 ? "#0f0" : "#f0f"
        ctx.fillRect(cx + x-1,cy + y-1,2,2)

        if (count > 1)
        {
            console.log("Duplicated centroid", count)
        }
    }
}


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
            config.hexagonSize = hexagonSize
            config.palette = palette
            const patch = new HexagonPatch(0, 0, hexagonSize)

            const faces = patch.build();
            let background = 0 | Math.random() * palette.length

            if (Math.random() < 0.5)
            {
                ctx.fillStyle = "#000"
                background = null
            }
            else
            {
                ctx.fillStyle = palette[background]
            }
            ctx.fillRect(0,0, width, height);

            faces.forEach( face => {
                truchetFace(palette, faces, face)
            })

            paintShapes(faces, background)

            // ctx.lineWidth = 1
            // faces.forEach( face => {
            //
            //      renderDebugFace(face, false, false)
            // })
        }

        paint()

        canvas.addEventListener("click", paint, true)
    }
);
