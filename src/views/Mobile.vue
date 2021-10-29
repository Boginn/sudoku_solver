<template>
  <v-container class="ma-0">
    <v-row class="d-flex ma-0 pa-0  bgcolor justify-center">
      <v-col class="d-flex ma-0 pa-0 justify-center ">
        <v-btn x-large outlined @click="scan()" class="primary--text btn"
          >Solve Sudoku</v-btn
        >

        <v-btn x-large outlined @click="clear()" class="tertiary--text btn"
          >Clear</v-btn
        >
      </v-col>
    </v-row>

    <v-row class="text-center mt-1">
      <v-col>
        <div class="d-flex  ">
          <v-col>
            <div>
              <div style="white-space: nowrap">
                <span v-for="(col, index) in row1" :key="index">
                  <input
                    style="white-space: nowrap"
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row1[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap">
                <span v-for="(col, index) in row2" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row2[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap" class="mb-2">
                <span v-for="(col, index) in row3" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row3[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>

              <div style="white-space: nowrap">
                <span v-for="(col, index) in row4" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row4[index]"
                  />

                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap">
                <span v-for="(col, index) in row5" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row5[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap" class="mb-2">
                <span v-for="(col, index) in row6" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row6[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>

              <div style="white-space: nowrap">
                <span v-for="(col, index) in row7" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row7[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap">
                <span v-for="(col, index) in row8" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row8[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div style="white-space: nowrap">
                <span v-for="(col, index) in row9" :key="index">
                  <input
                    maxLength="1"
                    pattern="\d*"
                    class="tile secondary--text"
                    type="text"
                    v-model="row9[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
            </div>
          </v-col>

          <!-- <v-col lg="4" sm="12" class="ma-1 ">
            <v-row>
              <v-col>
                <h1 class="display-2  mb-3">
                  <span class="primary--text font-shadow font-weight-bold">
                    Sudoku
                  </span>
                  <span class="secondary--text font-shadow font-weight-bold">
                    Solver
                  </span>
                </h1>

                <p class="subheading font-weight-regular">
                  Input the numbers you have and the solver will do the rest.
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1" class=" d-flex">
                <v-btn
                  x-large
                  outlined
                  @click="setExample1()"
                  class="primary--text btn"
                  >ex.1</v-btn
                >
                <v-btn
                  x-large
                  outlined
                  @click="setExample2()"
                  class="secondary--text btn"
                  >ex.2
                </v-btn>
                <v-btn
                  x-large
                  outlined
                  @click="setExample3()"
                  class="tertiary--text btn"
                  >ex.3</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="secondary--text" v-if="isMessage">No Solution!</p>
                <p class="secondary--text" v-else>&nbsp;</p>

                <v-btn
                  x-large
                  outlined
                  @click="scan()"
                  class="primary--text btn"
                  >Solve Sudoku</v-btn
                >
                <v-btn
                  x-large
                  outlined
                  disabled
                  @click="solveNext()"
                  class="secondary--text btn"
                  >Solve next number</v-btn
                >
                <v-btn
                  x-large
                  outlined
                  @click="clear()"
                  class="tertiary--text btn"
                  >Clear</v-btn
                >
              </v-col>
            </v-row>
          </v-col> -->
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex text-center">
      <v-col>
        <h1 class="display-2">
          <span class="primary--text font-shadow font-weight-bold">
            Sudoku
          </span>
          <span class="secondary--text font-shadow font-weight-bold">
            Solver
          </span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class=" d-flex justify-center">
        <v-btn x-large outlined @click="setExample1()" class="primary--text btn"
          >ex.1</v-btn
        >
        <v-btn
          x-large
          outlined
          @click="setExample2()"
          class="secondary--text btn"
          >ex.2
        </v-btn>
        <v-btn
          x-large
          outlined
          @click="setExample3()"
          class="tertiary--text btn"
          >ex.3</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Mobile',

  data: () => ({
    isMessage: false,
  }),

  created() {
    console.log('mobile');
  },

  computed: {
    // /*
    stateBoard() {
      return this.$store.getters.currentBoard;
    },
    currentBoard() {
      return [
        this.row1,
        this.row2,
        this.row3,
        this.row4,
        this.row5,
        this.row6,
        this.row7,
        this.row8,
        this.row9,
      ];
    },

    row1: {
      get: function() {
        return this.$store.getters.currentBoard[0];
      },
      set: function(newValue) {
        console.log(newValue);
        // this.$store.getters.currentBoard[0] = newValue;
      },
    },
    row2: {
      get: function() {
        return this.$store.getters.currentBoard[1];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[1] = newValue;
      },
    },
    row3: {
      get: function() {
        return this.$store.getters.currentBoard[2];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[2] = newValue;
      },
    },
    row4: {
      get: function() {
        return this.$store.getters.currentBoard[3];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[3] = newValue;
      },
    },
    row5: {
      get: function() {
        return this.$store.getters.currentBoard[4];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[4] = newValue;
      },
    },
    row6: {
      get: function() {
        return this.$store.getters.currentBoard[5];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[5] = newValue;
      },
    },
    row7: {
      get: function() {
        return this.$store.getters.currentBoard[6];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[6] = newValue;
      },
    },
    row8: {
      get: function() {
        return this.$store.getters.currentBoard[7];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[7] = newValue;
      },
    },
    row9: {
      get: function() {
        return this.$store.getters.currentBoard[8];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.currentBoard[8] = newValue;
      },
    },

    // */
  },

  methods: {
    showMessage() {
      this.isMessage = true;
      setTimeout(() => {
        this.isMessage = false;
      }, 3000);
    },
    clear() {
      const empty = [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ];
      this.$store.dispatch('setCurrentBoard', empty);
    },
    scan() {
      let board = this.parseBoard(this.currentBoard);

      for (let i = 0; i < board.length; i++) {
        let valuesAlreadySeen = [];
        for (let j = 0; j < board.length; j++) {
          let value = board[i][j];
          if (value != null) {
            if (valuesAlreadySeen.indexOf(value) >= 0) {
              this.showMessage();
              return;
            }
          }
          valuesAlreadySeen.push(value);
        }
      }

      this.solve();
    },
    solve() {
      this.parseBoard(this.currentBoard);
      const board = this.isSolved(this.currentBoard) ? this.currentBoard : null;
      if (board != null) {
        this.$store.dispatch('setCurrentBoard', board);
      } else {
        this.showMessage();
      }
      console.log(board);
    },
    solveNext() {
      // solveNext: make a new list of the current board,find coords of next tile, solve.
      // target the tile of the solved board with the coord and overwrite the corresponding
      // value in the new list. commit list as the current board

      // each time isSolved is called it overwrites all the boards,
      // workaround for clear() and the likes is to have the data initialized there
      // tis strange.

      this.parseBoard(this.currentBoard);

      const coords = this.findZero(this.currentBoard);
      const { x, y } = coords;

      const board = this.isSolved(this.currentBoard) ? this.currentBoard : null;

      console.log(board);
      console.log(this.saved);

      console.log(x, y);
    },
    parseBoard(_board) {
      let board = _board;
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] != null) {
            board[i][j] = parseInt(board[i][j]);
          }
        }
      }

      return board;
    },

    findZero(board) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let col = board[i][j];

          if (!col) {
            return { x: i, y: j };
          }
        }
      }

      return [];
    },
    findZeroReplace(board, n) {
      let result = board;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (!result[i][j]) {
            result[i][j] = n;
          }
        }
      }
      return result;
    },
    isSolved(board) {
      const coords = this.findZero(board);
      if (coords.length == 0) {
        return true;
      }

      const { x, y } = coords;
      for (let value = 1; value <= 9; value++) {
        if (this.isValid(board, x, y, value)) {
          board[x][y] = value;

          if (this.isSolved(board)) {
            return true;
          } else {
            board[x][y] = null;
          }
        }
      }

      return false;
    },
    isValid(board, row, col, value) {
      if (
        this.isValidInRow(board, col, value) &&
        this.isValidInColumn(board, row, value) &&
        this.isValidInBox(board, row, col, value)
      ) {
        return true;
      }

      return false;
    },

    isValidInRow(board, col, value) {
      for (let i = 0; i < 9; i++) {
        if (board[i][col] == value) {
          return false;
        }
      }

      return true;
    },

    isValidInColumn(board, row, value) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] == value) {
          return false;
        }
      }

      return true;
    },

    isValidInBox(board, row, col, value) {
      let rowSplit = row - (row % 3);
      let colSplit = col - (col % 3);

      for (let i = rowSplit; i < rowSplit + 3; i++) {
        for (let j = colSplit; j < colSplit + 3; j++) {
          if (board[i][j] == value) {
            return false;
          }
        }
      }

      return true;
    },

    setExample1() {
      const example = [
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9],
      ];
      this.$store.dispatch('setCurrentBoard', example);
    },
    setExample2() {
      const example = [
        [null, null, 9, 1, 3, null, 6, null, null],
        [null, null, 2, 5, 9, null, null, null, null],
        [null, 5, 8, null, 6, null, 2, null, null],
        [1, null, null, null, null, 7, null, null, 6],
        [null, null, null, null, null, null, null, 2, null],
        [null, 2, null, null, null, 3, null, 7, 9],
        [4, null, null, null, null, null, 9, 6, null],
        [null, 7, null, null, null, null, null, null, 5],
        [9, 8, 1, 2, null, null, null, 3, 7],
      ];
      this.$store.dispatch('setCurrentBoard', example);
    },
    setExample3() {
      const example = [
        [9, null, null, 5, null, null, null, 6, 2],
        [null, null, null, 9, 3, null, 8, 4, null],
        [null, 7, null, null, 8, null, null, null, null],
        [null, null, null, 6, null, null, 2, null, null],
        [8, null, 2, null, 5, null, null, null, null],
        [null, 5, 7, null, null, null, null, 3, 8],
        [null, 3, null, null, 6, 4, null, null, null],
        [7, 6, 9, null, 1, 2, 5, 8, null],
        [4, null, 8, null, 9, 5, 3, 1, 6],
      ];
      this.$store.dispatch('setCurrentBoard', example);
    },
  },
};
</script>

<style>
.border {
  border: 1px solid #9876aa;
}
.font-shadow {
  text-shadow: black 1px 1px;
}
.btn {
  text-shadow: 2px 1px 0 black;
  text-transform: none !important;
  font-size: 18pt !important;
  margin: 6px;
}
input[type='text'],
select {
  font-size: 15pt;
  text-align: center;
  padding: 10px;
  width: 32px;
  height: 32px;
  margin: 4px;
  display: inline-block;
  border: 1px solid white;
  border-radius: 4px;
  box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
