<template>
  <v-container>
    <v-row class="text-center mt-10">
      <v-col cols="12">
        <div class="d-flex align-center pb-5 pt-5 wrap">
          <v-col cols="8" class="d-flex align-center justify-center">
            <div class="">
              <div>
                <span v-for="(col, index) in row1" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row1[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row2" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row2[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row3" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row3[index]"
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
                    class="tile secondary--text"
                    type="number"
                    v-model="row4[index]"
                  />

                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row5" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row5[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row6" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row6[index]"
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
                    class="tile secondary--text"
                    type="number"
                    v-model="row7[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row8" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row8[index]"
                  />
                  <span v-if="index == 2 || index == 5"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                </span>
              </div>
              <div>
                <span v-for="(col, index) in row9" :key="index">
                  <input
                    class="tile secondary--text"
                    type="number"
                    v-model="row9[index]"
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
                  disabled
                  @click="solveNext()"
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

  data: () => ({}),

  computed: {
    example() {
      return this.$store.getters.example;
    },
    // /*
    skeleton() {
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
      // return this.$store.getters.skeleton;
    },

    row1: {
      get: function() {
        return this.$store.getters.skeleton[0];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[0] = newValue;
      },
    },
    row2: {
      get: function() {
        return this.$store.getters.skeleton[1];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[1] = newValue;
      },
    },
    row3: {
      get: function() {
        return this.$store.getters.skeleton[2];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[2] = newValue;
      },
    },
    row4: {
      get: function() {
        return this.$store.getters.skeleton[3];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[3] = newValue;
      },
    },
    row5: {
      get: function() {
        return this.$store.getters.skeleton[4];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[4] = newValue;
      },
    },
    row6: {
      get: function() {
        return this.$store.getters.skeleton[5];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[5] = newValue;
      },
    },
    row7: {
      get: function() {
        return this.$store.getters.skeleton[6];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[6] = newValue;
      },
    },
    row8: {
      get: function() {
        return this.$store.getters.skeleton[7];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[7] = newValue;
      },
    },
    row9: {
      get: function() {
        return this.$store.getters.skeleton[8];
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.getters.skeleton[8] = newValue;
      },
    },
    // */
  },

  methods: {
    reset() {
      this.$store.dispatch('setSkeleton', this.example);
    },
    solve() {
      for (let i = 0; i < this.skeleton.length; i++) {
        for (let j = 0; j < this.skeleton[i].length; j++) {
          if (this.skeleton[i][j] != null) {
            this.skeleton[i][j] = parseInt(this.skeleton[i][j]);
          }
        }
      }
      const board = this.isSolved(this.skeleton) ? this.skeleton : null;
      console.log(board);
      this.$store.dispatch('setSkeleton', board);
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
