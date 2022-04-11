/**
 * Pada soal kali ini disediakan class `Person` dimana kalian diminta untuk melengkapi serta membuat beberapa hal dibawah ini:
 * - Class Person yang memiliki properti name, age, dan job
 * - Buatlah getter untuk masing masing Properti diatas dengan format `getName` untuk mendapatkan nama, `getAge` untuk mendapatkan usia, dan `getJob` untuk mendapatkan pekerjaan dari class Person.
 * - Buatlah setter untuk masing masing Properti diatas dengan format `setName` untuk mengubah nilai nama, `setAge` untuk mengubah nilai usia, dan `setJob` untuk mengubah nilai pekerjaan dari class Person
 */

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // TODO: answer here
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getJob() {
    return this.job;
  }

  set setName(changeName) {
    this.name = changeName;
  }
  set setAge(changeAge) {
    this.age = changeAge;
  }
  set setJob(changeJob) {
    this.job = changeJob;
  }
}

const p = new Person("Me", 26, "Doctor");
console.log(p.getName);
p.setName = "You";
console.log(p.getName);

module.exports = Person;
