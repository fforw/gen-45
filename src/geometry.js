let vertexCounter = 1000;

export class Vertex
{
    /**
     * X coordinate
     * @type {number}
     */
    x;
    /**
     * Y coordinate
     * @type {number}
     */
    y;

    /**
     * Z coordinate
     * @type {number}
     */
    z;

    /**
     * Half-edge 
     * @type {null}
     */
    halfEdge = null;

    constructor(x, y, z, halfEdge)
    {
        this.x = x;
        this.y = y;
        this.z = z;

        this.halfEdge = halfEdge;
        this.id = vertexCounter++;
    }

    round()
    {
        this.x |= 0
        this.y |= 0
        this.z |= 0

        return this
    }

    toString()
    {
        return "#" + this.id + ": " + (this.x) + "/" + (this.y)// + "/" + this.z
    }


}


export class Edge
{
    /**
     * One of the two half edges of the edge.
     *
     * @type {HalfEdge}
     */
    halfEdge = null;

    /**
     * Shaped attached to that halfEdge
     * 
     * @type {Shape}
     */
    shape = null

    constructor(halfEdge)
    {
        this.halfEdge = halfEdge;
    }

}
let faceCounter = 0;


export class Face
{
    stroked = 1

    /**
     * First half edge of the face interior, part of a closed loop back to the fist edge.
     *
     * @type {HalfEdge}
     */
    halfEdge = null;

    /**
     * Color for this face
     * @type {Color}
     */
    color = null
    
    constructor(halfEdge)
    {
        this.halfEdge = halfEdge;
        this.id = faceCounter++;

    }
    get length()
    {
        const start = this.halfEdge;
        let curr = start;
        let count = 0;
        do
        {
            curr = curr.next
            count++;
        } while (curr !== start)
        return count;
    }


    /**
     * Returns the face centroid
     * @return {number[]} x/y/z as array
     */
    get centroid()
    {
        let x = 0;
        let y = 0;
        let z = 0;
        let count = 0;

//        const visited = new Set()
        const first = this.halfEdge
        let curr = first
        do
        {
//            visited.add(curr)

            x += curr.vertex.x;
            y += curr.vertex.y;
            z += curr.vertex.z;
            curr = curr.next
            count++;

            if (count > 4)
            {
                throw new Error("More than 4 vertices in face")
            }

  //      } while (!visited.has(curr))
        } while (curr !== first)

        return [x / count, y / count, z/count];
    }

    nthHalfEdge(n)
    {
        let curr = this.halfEdge;
        for (let i=0; i < n; i++)
        {
            curr = curr.next
        }

        return curr
    }
}

let counter = 0;

/**
 * Central class of the half edge data structure
 */
export class HalfEdge
{
    /**
     * Next halfEdge in the face
     * @type {HalfEdge}
     */
    next = null;

    /**
     * Twin halfEdge from another face
     * @type {HalfEdge}
     */
    twin = null;
    /**
     * Vertex of this half edge
     * @type {Vertex}
     */
    vertex = null;

    /**
     * The edge the half edge belongs to
     * @type {Edge}
     */
    edge = null;

    /**
     * The face the half edge belongs to
     * @type {Face}
     */
    face = null;

    constructor(next, vertex, edge, face)
    {
        this.next = next;
        this.twin = null;
        this.vertex = vertex;
        this.edge = edge;
        this.face = face;

        if (vertex && !vertex.halfEdge)
        {
            vertex.halfEdge = this;
        }

        if (edge && !edge.halfEdge)
        {
            edge.halfEdge = this;
        }

        if (face && !face.halfEdge)
        {
            face.halfEdge = this;
        }

        this.id = counter++

    }


    twinWith(other)
    {
        if (__DEV)
        {
            let { vertex : v0 } = this
            let { vertex : v1 } = this.next
            let { vertex : v2 } = other
            let { vertex : v3 } = other.next

            if (v0.x !== v3.x || v0.y !== v3.y || v1.x !== v2.x || v1.y !== v2.y)
            {
                throw new Error("Half edge coords not twinned " + this + ": " + v0 + ", " + v1 + ", " + v2 + ", " + v3)
            }
        }

        this.twin = other
        other.twin = this

        this.vertex = other.next.vertex
        other.vertex = this.next.vertex
        
        other.edge = this.edge || other.edge
        other.edge.halfEdge = this
    }

    get prev()
    {
        let curr = this;
        do
        {
            curr = curr.next
        } while (curr.next !== this)

        //console.log("prev of ", this, "is", curr)

        return curr;
    }

}

export class Shape
{
    points = []
    edges = new Set()

    registerShape()
    {
        const { edges } = this
        for (let edge of edges)
        {
            edge.shape = this
        }
    }

    addPoints(pts)
    {
        this.points = this.points.concat(pts)
    }

    addEdges(edges)
    {
        if (edges instanceof Set)
        {
            for (let edge of edges)
            {
                this.edges.add(edge)
            }
        }
        else
        {
            this.edges.add(edges)
        }
    }

    static merge(start, end)
    {
        const startShape = start.edge.shape
        const endShape = end.edge.shape

        if (!startShape)
        {
            if (endShape)
            {
                start.edge.shape = endShape
                endShape.addEdges(start.edge)
                return endShape
            }
        }

        if (!endShape)
        {
            if (startShape)
            {
                end.edge.shape = startShape
                startShape.addEdges(end.edge)
                return startShape
            }
        }

        // both shapes null is still in the mix
        
        const newShape = new Shape()
        if (startShape)
        {
            newShape.addPoints(startShape.points)
            newShape.addEdges(startShape.edges)
        }
        else
        {
            newShape.addEdges(start.edge)
        }

        if (endShape)
        {
            newShape.addPoints(endShape.points)
            newShape.addEdges(endShape.edges)
        }
        else
        {
            newShape.addEdges(end.edge)
        }
        newShape.registerShape()

        return newShape
    }
}
