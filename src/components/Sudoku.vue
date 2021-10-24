<template>
  <v-container>
    <v-row class="text-center mt-10">
      <v-col cols="12">
        <div class="d-flex align-center pb-5 pt-5 wrap">
          <v-col cols="8" class="d-flex align-center justify-center">
            <div class="" v-if="!isBusy">
              <div>
                <span v-for="(col, index) in row1" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row2" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row3" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <span>&nbsp;</span>

              <div>
                <span v-for="(col, index) in row4" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />

                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row5" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row6" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>

              <span>&nbsp;</span>

              <div>
                <span v-for="(col, index) in row7" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row8" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row9" :key="index">
                  <input
                    :value="col"
                    class="tile secondary--text"
                    type="number"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
            </div>
          </v-col>

          <v-col class=" pr-16">
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
              <v-col>
                <v-btn
                  x-large
                  outlined
                  @click="solve()"
                  class="primary--text btn"
                  >Solve Sudoku</v-btn
                >
                <v-btn
                  x-large
                  outlined
                  @click="solve()"
                  class="secondary--text btn"
                  >Solve next number</v-btn
                >
                <v-btn
                  x-large
                  outlined
                  @click="reset()"
                  class="tertiary--text btn"
                  >Reset</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Sudoku',

  data: () => ({
    // example: [
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    //   [null, null, null, null, null, null, null, null, null],
    // ],
    // skeleton: [
    //   [5, 3, null, null, 7, null, null, null, null],
    //   [6, null, null, 1, 9, 5, null, null, null],
    //   [null, 9, 8, null, null, null, null, 6, null],
    //   [8, null, null, null, 6, null, null, null, 3],
    //   [4, null, null, 8, 0, 3, null, null, 1],
    //   [7, null, null, null, 2, null, null, null, 6],
    //   [null, 6, null, null, null, null, 2, 8, null],
    //   [null, null, null, 4, 1, 9, null, null, 5],
    //   [null, null, null, null, 8, null, null, 7, 9],
    // ],
    /*
    row1: [5, 3, null, null, 7, null, null, null, null],
    row2: [6, null, null, 1, 9, 5, null, null, null],
    row3: [null, 9, 8, null, null, null, null, 6, null],
    row4: [8, null, null, null, 6, null, null, null, 3],
    row5: [4, null, null, 8, 0, 3, null, null, 1],
    row6: [7, null, null, null, 2, null, null, null, 6],
    row7: [null, 6, null, null, null, null, 2, 8, null],
    row8: [null, null, null, 4, 1, 9, null, null, 5],
    row9: [null, null, null, null, 8, null, null, 7, 9],
    */
    isBusy: false,
  }),

  computed: {
    skeleton() {
      return this.$store.getters.skeleton;
    },
    row1: {
      get: function() {
        return this.$store.getters.skeleton[0];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[0] = newValue;
        this.$skeleton;
      },
    },
    row2: {
      get: function() {
        return this.$store.getters.skeleton[1];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[1] = newValue;
      },
    },
    row3: {
      get: function() {
        return this.$store.getters.skeleton[2];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[2] = newValue;
      },
    },
    row4: {
      get: function() {
        return this.$store.getters.skeleton[3];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[3] = newValue;
      },
    },
    row5: {
      get: function() {
        return this.$store.getters.skeleton[4];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[4] = newValue;
      },
    },
    row6: {
      get: function() {
        return this.$store.getters.skeleton[5];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[5] = newValue;
      },
    },
    row7: {
      get: function() {
        return this.$store.getters.skeleton[6];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[6] = newValue;
      },
    },
    row8: {
      get: function() {
        return this.$store.getters.skeleton[7];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[7] = newValue;
      },
    },
    row9: {
      get: function() {
        return this.$store.getters.skeleton[8];
      },
      set: function(newValue) {
        this.$store.getters.skeleton[8] = newValue;
      },
    },
  },

  methods: {
    reset() {
      this.assignToRows(this.example);
    },
    solve() {
      this.isBusy = true;
      const board = this.isSolved(this.skeleton) ? this.skeleton : null;
      console.log(board);
      this.$store.dispatch('setSkeleton', board);
      this.row1 = board[0];
      this.row2 = board[1];
      this.row3 = board[2];
      this.row4 = board[3];
      this.row5 = board[4];
      this.row6 = board[5];
      this.row7 = board[6];
      this.row8 = board[7];
      this.row9 = board[8];

      setTimeout(() => {
        this.isBusy = false;
      }, 100);
      // this.$store.getters.skeleton[0] = board[0];
      // this.$store.getters.skeleton[1] = board[1];
      // this.$store.getters.skeleton[2] = board[2];
      // this.$store.getters.skeleton[3] = board[3];
      // this.$store.getters.skeleton[4] = board[4];
      // this.$store.getters.skeleton[5] = board[5];
      // this.$store.getters.skeleton[6] = board[6];
      // this.$store.getters.skeleton[7] = board[7];
      // this.$store.getters.skeleton[8] = board[8];
    },

    findZero(board) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let col = board[i][j];

          if (col == null) {
            return { x: i, y: j };
          }
        }
      }
      return [];
    },
    isSolved(board) {
      const coords = this.findZero(board);

      if (coords.length == 0) {
        return true;
      }

      //  const x = coords[0];
      //  const y = coords[1];
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
  },
};
</script>

<style>
.wrap {
  border: 1px solid white;
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
input[type='number'],
select {
  font-size: 24pt;
  text-align: center;
  padding: 10px;
  width: 42px;
  height: 42px;
  margin: 4px;
  display: inline-block;
  border: 1px solid #9876aa;
  border-radius: 4px;
  box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
