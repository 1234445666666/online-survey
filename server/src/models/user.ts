export function findByName(name: string): string {
  new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE name = ?", [name], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
  return "test";
}

export function createUser(userData: string) {
  new Promise((resolve, reject) => {
    db.run("INSERT INTO users (name) VALUES (?)", [userData], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, name: userData });
      }
    });
  });
}
