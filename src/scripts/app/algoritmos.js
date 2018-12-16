define([''], () => {
  let algoritmos = {};
  algoritmos.floydWarshall = (function () {
        /**
         * Matrix used for the algorithm.
         */
        let dist;
        let camino;
        /**
         * Initialize the distance matrix.
         *
         * @private
         * @param {Array} graph Distance matrix of the array.
         * @return {Array} Distance matrix used for the algorithm.
         */
        let init = (graph) => {
          dist = [];
          let size = graph.length;
          for (let i = 0; i < size; i += 1) {
            dist[i] = [];
            for (let j = 0; j < size; j += 1) {
              if (i === j) {
                dist[i][j] = 0;
              } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity;
              } else {
                dist[i][j] = graph[i][j];
              }
            }
          }
          return dist;
        }
        /**
         * Floyd-Warshall algorithm. Finds the shortest path between
         * each two vertices.<br><br>
         * Complexity: O(|V|^3) where V is the number of vertices.
         *
         * @public
         * @module graphs/shortest-path/floyd-warshall
         * @param {Array} graph A distance matrix of the graph.
         * @return {Array} Array which contains the shortest
         *    distance between each two vertices.
         *
         * @example
         * var floydWarshall =
         * require('path-to-algorithms/src/graphs/shortest-path/floyd-warshall').floydWarshall;
         * var distMatrix =
         *    [[Infinity, 7,        9,       Infinity,  Infinity, 16],
         *     [7,        Infinity, 10,       15,       Infinity, Infinity],
         *     [9,        10,       Infinity, 11,       Infinity, 2],
         *     [Infinity, 15,       11,       Infinity, 6,        Infinity],
         *     [Infinity, Infinity, Infinity, 6,        Infinity, 9],
         *     [16,       Infinity, 2,        Infinity, 9,        Infinity]];
         *
         * // [ [ 0, 7, 9, 20, 20, 11 ],
         * //   [ 7, 0, 10, 15, 21, 12 ],
         * //   [ 9, 10, 0, 11, 11, 2 ],
         * //   [ 20, 15, 11, 0, 6, 13 ],
         * //   [ 20, 21, 11, 6, 0, 9 ],
         * //   [ 11, 12, 2, 13, 9, 0 ] ]
         * var shortestDists = floydWarshall(distMatrix);
         */
        return (graph) => {
          dist = init(graph);
          let size = graph.length;
          for (let k = 0; k < size; k += 1) {
            for (let i = 0; i < size; i += 1) {
              for (let j = 0; j < size; j += 1) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                  dist[i][j] = dist[i][k] + dist[k][j];
                  camino = graph[i][k] + ' -> ' + graph[k][j];
                }
              }
            }
          }
          return {"array": dist, "camino": camino};
        };
      })();
      
    return algoritmos;
});