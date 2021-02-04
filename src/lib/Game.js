import store from "../store";
console.log(store.getters.firebase)
import { db } from './Firebase';
// const { db } = store.getters.firebase;
//const { storage } = store.getters.firebase;

const collection = db.collection("Games");

class Game {
    constructor(data) {
      Object.assign(this, data);
    }

    static Set(result, date, characters) {
        const game = new Game({
          result,
          date,
          characters
        });
        console.log(game)
        this.UploadFirebase(game);
        return game;
      }
    
      static UploadFirebase(game) {
        this.CreateDoc(game);
        return (game);
      }
static CreateDoc(game) {
    collection.add({
        result:game.result,
        date:game.date,
        characters:game.characters
      })
      .catch(err => console.error(err));
  }
}
export default Game;