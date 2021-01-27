import store from "../store";

const { db } = store.getters.firebase;
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
        this.UploadFirebase(game);
        return game;
      }
    
      static UploadFirebase(game) {
        this.CreateDoc(game);
        return this.UploadBlob(game);
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