/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { Client } from 'boardgame.io/react';
import TicTacToe from './game';
import Board from './board';

const App = Client({
  game: TicTacToe,
  board: Board,
  ai: {
    enumerate: G => {
      let r = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          r.push({ move: 'clickCell', args: [i] });
        }
      }
      return r;
    },
  },
});

const Singleplayer = () => (
  <div>
    <h1>Singleplayer</h1>
    <App gameID="single" />
  </div>
);

export default Singleplayer;
